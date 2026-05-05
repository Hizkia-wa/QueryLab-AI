import { useState } from "react";

export default function SoalCard({ soal, data }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");

  const normalize = (text) =>
    text.toLowerCase().replace(/\s+/g, " ").trim();

  const handleCheck = () => {
    if (normalize(query) !== normalize(soal.jawaban)) {
      setStatus("error");
      setResult("❌ Jawaban masih salah!");
      return;
    }

    setStatus("success");
    setResult(soal.getResult(data));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-6">

      {/* SOAL */}
      <h4 className="font-bold text-lg mb-2">
        Soal {soal.no}
      </h4>
      <p className="text-slate-600 mb-4">{soal.pertanyaan}</p>

      {/* EDITOR */}
      <textarea
        className="w-full p-3 rounded-xl border bg-slate-900 text-green-400 font-mono mb-3"
        rows="4"
        placeholder="Tulis SQL di sini..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={handleCheck}
        className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
      >
        Cek Jawaban
      </button>

      {/* RESULT */}
      <div className="mt-4">
        {status === "error" && (
          <div className="text-red-500">{result}</div>
        )}

        {status === "success" && (
          <div>
            <div className="text-green-600 mb-2 font-bold">
              ✅ Jawaban Benar!
            </div>

            <table className="w-full text-sm border">
              <thead className="bg-slate-100">
                <tr>
                  {Object.keys(result[0]).map((k) => (
                    <th key={k} className="p-2">{k}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.map((row, i) => (
                  <tr key={i}>
                    {Object.values(row).map((v, j) => (
                      <td key={j} className="p-2">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}