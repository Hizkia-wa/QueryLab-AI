import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { prompt, mode } = await req.json();

    if (!prompt) {
      return Response.json({ error: "Prompt wajib diisi" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // 🔥 CEK API KEY
    if (!apiKey) {
      console.error("API KEY TIDAK ADA!");
      return Response.json(
        { error: "API key tidak ditemukan" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const systemPromptError = `
Kamu adalah AI tutor SQL untuk metode guide-error.

- Balas dengan satu query SQL yang SALAH.
- Sertakan komentar perbaikan dengan format:
  -- ❌ diubah: <penjelasan singkat>
- Gunakan bahasa Indonesia.
- Jangan berikan query yang benar.
- Jangan tambahkan penjelasan panjang di luar query.
`;

    const systemPromptNormal = `
Kamu adalah AI SQL assistant.
Berikan query yang benar.
`;

    const finalPrompt =
      mode === "normal" ? systemPromptNormal : systemPromptError;

    const result = await model.generateContent([
      finalPrompt,
      prompt,
    ]);

    const response = await result.response;

    const text = response?.text?.();

    return Response.json({
      reply: text || "Tidak ada respon dari AI",
    });

  } catch (err) {
    console.error("🔥 ERROR BACKEND:", err); // 🔥 WAJIB

    return Response.json(
      { error: err.message || "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}