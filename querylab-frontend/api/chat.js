// api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { prompt, image } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  try {
    const contents = [{
      parts: [
        { text: `Kamu adalah instruktur SQL di QueryLab. 
                 TUGAS: Membantu user mengerjakan tugas database dengan metode 'Guided Error'.
                 
                 CARA KERJA:
                 1. Analisis soal tugas (teks/gambar) yang diberikan user.
                 2. JANGAN beri jawaban benar. Berikan 1 query yang HAMPIR benar (selipkan 1 kesalahan logika/sintaks).
                 3. Berikan 'HINT' singkat agar user menganalisis sendiri.
                 4. Jika user bertanya hal di luar SQL, arahkan kembali ke tugas.
                 
                 Konteks Soal: ${prompt}` }
      ]
    }];

    if (image) {
      contents[0].parts.push({
        inline_data: { mime_type: "image/jpeg", data: image }
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents })
      }
    );

    const data = await response.json();
    const aiReply = data.candidates[0].content.parts[0].text;
    res.status(200).json({ reply: aiReply });
  } catch (error) {
    res.status(500).json({ error: "Gagal memproses ke Gemini" });
  }
}