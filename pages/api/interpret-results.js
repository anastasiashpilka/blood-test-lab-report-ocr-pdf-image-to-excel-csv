import { GoogleGenerativeAI } from '@google/generative-ai';

const MODELS = [
  'gemini-3.1-flash-lite', // 15 RPM — highest free quota
  'gemini-2.5-flash-lite', // 10 RPM
  'gemini-2.5-flash',      // 5 RPM — best quality
  'gemini-3-flash',        // 5 RPM
];

async function tryGenerateContent(prompt) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  for (const modelName of MODELS) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      return result.response.text().trim();
    } catch (err) {
      if (err.status === 429 || err.status === 503 || err.status === 404 || (err.message && (err.message.includes('429') || err.message.includes('quota') || err.message.includes('RESOURCE_EXHAUSTED')))) continue;
      throw err;
    }
  }
  throw new Error('All Gemini models failed.');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { headers, rows } = req.body;
  if (!headers || !rows) {
    return res.status(400).json({ error: 'Missing headers or rows' });
  }

  const tableText = [headers.join(' | '), ...rows.map((r) => r.join(' | '))].join('\n');

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
    console.error('Interpretation error:', error);
    return res.status(500).json({ error: 'Failed to generate interpretation' });
  }
}
