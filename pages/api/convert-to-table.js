import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import mammoth from 'mammoth';
import pdfParse from 'pdf-parse';
import multer from 'multer';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const upload = multer({ storage: multer.memoryStorage() });

export const config = {
    api: {
        bodyParser: false,
    },
};

async function extractContent(buffer, mimeType) {
    try {
        if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || mimeType === 'application/msword') {
            const textResult = await mammoth.extractRawText({ buffer: buffer });
            return textResult.value;
        } else if (mimeType.startsWith('image/')) {
            return {
                inlineData: {
                    data: buffer.toString("base64"),
                    mimeType,
                },
            };
        } else if (mimeType === 'application/pdf') {
            const pdfData = await pdfParse(buffer);
            return pdfData.text;
        } else {
            throw new Error('Unsupported file type.');
        }
    } catch (error) {
        console.error("Error extracting content:", error);
        throw new Error("Failed to extract content from the file.");
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Content-Type', 'application/json');
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // Handle file upload using multer
        await new Promise((resolve) => {
            upload.single('file')(req, res, (err) => {
                if (err) {
                    console.error("Multer error:", err);
                    return res.status(500).json({ error: `File upload failed: ${err.message}` });
                }
                resolve();
            });
        });

        const fileBuffer = req.file.buffer;
        const mimeType = req.file.mimetype;

        const extractedContent = await extractContent(fileBuffer, mimeType);

        const genAI = new GoogleGenerativeAI(apiKey);

        // Free Gemini models in order of preference — fallback if rate limit exceeded
        // Ordered: best quality first, highest daily quota last (gemini-3.1-flash-lite-preview = 500 RPD)
        const FREE_MODELS = [
            "gemini-2.5-flash",              // 5 RPM, 20 RPD — best quality
            "gemini-3-flash-preview",        // 5 RPM, 20 RPD
            "gemini-2.5-flash-lite",         // 10 RPM, 20 RPD
            "gemini-3.1-flash-lite-preview", // 15 RPM, 500 RPD — largest free quota
        ];

        // Unified prompt for JSON output to Gemini API
        const prompt = `
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

        let result;
        let lastError;
        for (const modelName of FREE_MODELS) {
            try {
                console.log(`Trying model: ${modelName}`);
                const model = genAI.getGenerativeModel({ model: modelName });
                result = await model.generateContent([prompt, extractedContent]);
                console.log(`Success with model: ${modelName}`);
                break;
            } catch (apiError) {
                console.error(`Model ${modelName} failed:`, apiError.message || apiError);
                const status = apiError.status || (apiError.response && apiError.response.status);
                // 429 = rate limit, 503 = overloaded — try next model
                if (status === 429 || status === 503 || (apiError.message && (apiError.message.includes('429') || apiError.message.includes('quota') || apiError.message.includes('RESOURCE_EXHAUSTED')))) {
                    lastError = apiError;
                    continue;
                }
                throw apiError;
            }
        }

        if (!result) {
            const retryAfter = lastError?.response?.headers ? lastError.response.headers.get('Retry-After') : null;
            res.setHeader('Content-Type', 'application/json');
            return res.status(429).json({
                error: 'All available models are rate limited. Please try again later.',
                retryAfter: retryAfter
            });
        }

        const rawText = result.response.text();
        const cleanedText = rawText
            .replace(/```json/g, '')
            .replace(/```/g, '')
            .trim();

        const jsonOutput = JSON.parse(cleanedText);

        if (Array.isArray(jsonOutput) && jsonOutput.length === 0) {
            return res.status(400).json({ error: 'No medical analysis data found in the document.' });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(jsonOutput);

    } catch (error) {
        console.error("Error processing file:", error);
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({ error: 'Failed to process file and get JSON.' });
    }
}