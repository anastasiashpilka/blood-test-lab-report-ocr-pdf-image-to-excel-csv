import { GoogleGenerativeAI } from '@google/generative-ai';
import mammoth from 'mammoth';
import pdfParse from 'pdf-parse';
import multer from 'multer';
import { rateLimit, getIp } from '../../lib/rateLimit';

const FILE_SIZE_LIMIT = 10 * 1024 * 1024; // 10 MB

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: FILE_SIZE_LIMIT },
});

export const config = {
  api: { bodyParser: false },
};

// Magic-byte signatures for each allowed MIME type
const SIGNATURES = {
  'application/pdf': [[0x25, 0x50, 0x44, 0x46]],                              // %PDF
  'image/jpeg': [[0xFF, 0xD8, 0xFF]],
  'image/png': [[0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    [[0x50, 0x4B, 0x03, 0x04]],                                                // ZIP/PK (DOCX)
  'application/msword':
    [[0xD0, 0xCF, 0x11, 0xE0], [0x50, 0x4B, 0x03, 0x04]],                    // OLE2 or ZIP
};

function validateMagicBytes(buffer, mimeType) {
  // WEBP: RIFF????WEBP (bytes 0-3 and 8-11)
  if (mimeType === 'image/webp') {
    return (
      buffer[0] === 0x52 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x46 &&
      buffer[8] === 0x57 && buffer[9] === 0x45 && buffer[10] === 0x42 && buffer[11] === 0x50
    );
  }
  const sigs = SIGNATURES[mimeType];
  if (!sigs) return false;
  return sigs.some((sig) => sig.every((byte, i) => buffer[i] === byte));
}

async function extractContent(buffer, mimeType) {
  if (
    mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    mimeType === 'application/msword'
  ) {
    const textResult = await mammoth.extractRawText({ buffer });
    return textResult.value;
  }
  if (mimeType.startsWith('image/')) {
    return { inlineData: { data: buffer.toString('base64'), mimeType } };
  }
  if (mimeType === 'application/pdf') {
    const pdfData = await pdfParse(buffer);
    return pdfData.text;
  }
  throw new Error('Unsupported file type.');
}

function runMulter(req, res) {
  return new Promise((resolve, reject) => {
    upload.single('file')(req, res, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// See MODELS in pages/api/interpret-results.js for why this order isn't by
// release date: only the Flash-Lite tier gets the generous 15 RPM / 500 RPD
// quota on this project; every plain Flash variant (2.5/3/3.5/3.6/3.7) is
// capped at 5 RPM / 20 RPD regardless of age. gemini-3.5-flash-lite (GA
// Jul 2026) is Google's purpose-built model for document parsing, so it
// leads; the rest are fallbacks in decreasing order of quota generosity.
const FREE_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.1-flash-lite',
  'gemini-2.5-flash-lite',
  'gemini-2.5-flash',
];

const PROMPT = `
I am giving you the results of my medical tests.
Extract ONLY the MEDICAL ANALYSIS RESULTS TABLE from the document.
The table should contain rows of medical tests with their corresponding results, units, and reference ranges.
Convert the tabular data into JSON format with "headers" and "rows".
The JSON structure should be:
{
  "headers": ["Column 1", "Column 2", ...],
  "rows": [
    ["Row 1 Cell 1", "Row 1 Cell 2", ...],
    ["Row 2 Cell 1", "Row 2 Cell 2", ...]
  ]
}
IGNORE any text that is NOT part of the medical results.
If no medical analysis results are found, return an empty JSON array []
Return only the JSON.
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const ip = getIp(req);
  const { allowed } = await rateLimit(ip, { limit: 5, windowMs: 60_000 });
  if (!allowed) {
    return res.status(429).json({ error: 'Too many requests. Please wait a minute and try again.' });
  }

  try {
    await runMulter(req, res);
  } catch (err) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ error: 'File too large. Maximum size is 10 MB.' });
    }
    console.error('Upload error:', err.code);
    return res.status(400).json({ error: 'File upload failed.' });
  }

  if (!req.file) {
    return res.status(400).json({ error: 'No file provided.' });
  }

  if (!validateMagicBytes(req.file.buffer, req.file.mimetype)) {
    return res.status(415).json({ error: 'File content does not match the declared type.' });
  }

  try {
    const extractedContent = await extractContent(req.file.buffer, req.file.mimetype);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    let result;
    let lastError;

    for (const modelName of FREE_MODELS) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        result = await model.generateContent([PROMPT, extractedContent]);
        break;
      } catch (apiError) {
        const status = apiError.status ?? apiError.response?.status;
        const isQuota =
          status === 429 ||
          status === 503 ||
          apiError.message?.includes('quota') ||
          apiError.message?.includes('RESOURCE_EXHAUSTED');
        if (isQuota) { lastError = apiError; continue; }
        throw apiError;
      }
    }

    if (!result) {
      const retryAfter = lastError?.response?.headers?.get?.('Retry-After') ?? null;
      return res.status(429).json({
        error: 'All available models are rate limited. Please try again later.',
        retryAfter,
      });
    }

    const rawText = result.response.text();
    const cleanedText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    const jsonOutput = JSON.parse(cleanedText);

    if (Array.isArray(jsonOutput) && jsonOutput.length === 0) {
      return res.status(400).json({ error: 'No medical analysis data found in the document.' });
    }

    return res.status(200).json(jsonOutput);
  } catch (error) {
    console.error('Error processing file:', error.message);
    return res.status(500).json({ error: 'Failed to process file.' });
  }
}
