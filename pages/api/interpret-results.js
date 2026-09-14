import { GoogleGenerativeAI } from '@google/generative-ai';
import { rateLimit, getIp } from '../../lib/rateLimit';

// Ordered by free-tier quota generosity for this project (checked in the
// Google AI Studio rate-limits dashboard), not by release date — only the
// "Flash-Lite" tier gets the generous 15 RPM / 500 RPD cap here; every
// plain "Flash" variant (2.5, 3, 3.5, 3.6, 3.7) sits at 5 RPM / 20 RPD
// regardless of how new it is. gemini-3.5-flash-lite is GA as of Jul 2026
// and is Google's purpose-built model for document parsing / high-volume
// automation, so it leads; gemini-3.1-flash-lite is the same generous tier
// as a proven second try; the rest are a stingier-quota safety net.
const MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.1-flash-lite',
  'gemini-2.5-flash-lite',
  'gemini-2.5-flash',
];

const MAX_HEADERS = 20;
const MAX_ROWS = 100;
const MAX_CELL_LENGTH = 200;

async function tryGenerateContent(prompt) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  for (const modelName of MODELS) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      return result.response.text().trim();
    } catch (err) {
      if (
        err.status === 429 ||
        err.status === 503 ||
        err.status === 404 ||
        err.message?.includes('429') ||
        err.message?.includes('quota') ||
        err.message?.includes('RESOURCE_EXHAUSTED')
      ) {
        continue;
      }
      throw err;
    }
  }
  throw new Error('All Gemini models failed.');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const ip = getIp(req);
  const { allowed } = await rateLimit(ip, { limit: 10, windowMs: 60_000 });
  if (!allowed) {
    return res.status(429).json({ error: 'Too many requests. Please wait a minute and try again.' });
  }

  const { headers, rows } = req.body;
  if (!Array.isArray(headers) || !Array.isArray(rows)) {
    return res.status(400).json({ error: 'Missing headers or rows' });
  }
  if (headers.length > MAX_HEADERS || rows.length > MAX_ROWS) {
    return res.status(400).json({ error: 'Input exceeds allowed size.' });
  }

  const sanitize = (val) => String(val ?? '').slice(0, MAX_CELL_LENGTH);
  const safeHeaders = headers.map(sanitize);
  const safeRows = rows.map((r) => (Array.isArray(r) ? r.map(sanitize) : []));

  const tableText = [safeHeaders.join(' | '), ...safeRows.map((r) => r.join(' | '))].join('\n');

  const prompt = `You are a medical information assistant. A patient has shared their blood test results. Analyze them and provide a plain-language summary.

Blood test data:
${tableText}

Rules:
- Only comment on values present in the data
- If a reference range column is present, use it to identify out-of-range values
- Do not diagnose — say "associated with" not "indicates you have"
- Keep tone calm, informational, and reassuring
- Total response must be under 300 words
- If all values are within normal range, return an empty flaggedValues array

Respond with valid JSON only (no markdown, no code fences):
{"summary":"2-4 sentence overall summary","flaggedValues":[{"name":"biomarker name","value":"the value","note":"one calm sentence"}]}`;

  try {
    const text = await tryGenerateContent(prompt);
    const jsonText = text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
    const parsed = JSON.parse(jsonText);
    return res.status(200).json(parsed);
  } catch (error) {
    console.error('Interpretation error:', error.message);
    return res.status(500).json({ error: 'Failed to generate interpretation' });
  }
}
