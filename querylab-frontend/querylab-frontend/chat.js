export default async function handler(req, res) {
  // Hanya izinkan method POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt, image } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  // Cek apakah API Key ada
  if (!apiKey) {
    return res.status(500).json({ reply: "Konfigurasi server salah: API Key tidak ditemukan." });
  }

  try {
    // Siapkan struktur parts untuk Gemini
    const parts = [
      { 
        text: `Kamu adalah instruktur SQL di QueryLab. 
               TUGAS: Membantu user mengerjakan tugas database dengan metode 'Guided Error'.
               
               CARA KERJA:
               1. Analisis soal tugas (teks/gambar) yang diberikan user.
               2. JANGAN langsung beri jawaban benar. Berikan 1 query yang HAMPIR benar (selipkan 1 kesalahan kecil).
               3. Berikan 'HINT' singkat agar user menganalisis sendiri.
               4. Jika user bertanya hal di luar SQL, arahkan kembali ke tugas.
               
               Pertanyaan User: ${prompt || "User mengirim gambar tugas."}` 
      }
    ];

    // Jika ada gambar (Base64), tambahkan ke parts
    if (image) {
      parts.push({
        inline_data: { 
          mime_type: "image/jpeg", 
          data: image 
        }
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          contents: [{ parts }] 
        })
      }
    );

    const data = await response.json();

    // Validasi apakah Gemini memberikan jawaban
    if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
      const aiReply = data.candidates[0].content.parts[0].text;
      return res.status(200).json({ reply: aiReply });
    } else {
      console.error("Gemini Error Detail:", data);
      return res.status(500).json({ reply: "Gemini tidak memberikan respon. Cek limit API atau gambar kamu." });
    }

  } catch (error) {
    console.error("Fetch Error:", error);
    return res.status(500).json({ reply: "Duh, server lagi pusing nih. Coba lagi ya!" });
  }
}