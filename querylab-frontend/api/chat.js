import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // 1. Tangani CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  // 2. Cek API Key
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API Key tidak ditemukan di environment." });
  }

  try {
    const { prompt, image } = req.body;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let result;
    if (image) {
      result = await model.generateContent([
        prompt,
        { inlineData: { data: image, mimeType: "image/png" } },
      ]);
    } else {
      result = await model.generateContent(prompt);
    }

    const response = await result.response;
    return res.status(200).json({ reply: response.text() });
  } catch (err) {
    console.error("Gemini Error:", err.message);
    return res.status(500).json({ error: err.message });
  }
}