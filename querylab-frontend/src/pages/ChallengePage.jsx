import React, { useState } from "react";
import { 
  Play, CheckCircle2, AlertCircle, Database, 
  HelpCircle, ArrowRight, Code2, Sparkles, Terminal 
} from "lucide-react";
import { studiKasusData } from "../data/challenge";

export default function ChallengePage() {
  const [queries, setQueries] = useState({});
  const [status, setStatus] = useState({});

  const checkAnswer = (id, userQuery, keys) => {
    if (!userQuery) return;
    const queryLower = userQuery.toLowerCase();
    const isCorrect = keys.every(key => queryLower.includes(key.toLowerCase()));
    setStatus({ ...status, [id]: isCorrect ? "success" : "error" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans">
      
      {/* HEADER SECTION */}
      <div className="bg-slate-900 text-white pt-24 pb-44 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles size={14} /> SQL Adventure Mode
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Mastering <span className="text-indigo-400">Data Queries</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Asah logika database kamu dengan menyelesaikan tantangan dari dunia industri nyata.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto -mt-28 px-6 relative z-20">
        
        {/* CASE OVERVIEW CARD */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-10 mb-10 border border-slate-100 transition-all hover:shadow-indigo-100">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">
                {studiKasusData.tema}
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                {studiKasusData.deskripsi}
              </p>
            </div>
            <div className="w-full md:w-72 bg-slate-50 rounded-3xl p-6 border border-slate-100 text-left">
              <div className="flex items-center gap-2 mb-4 text-indigo-600 font-bold">
                <Database size={20} />
                <span className="uppercase text-xs tracking-widest">Database Schema</span>
              </div>
              <div className="space-y-4">
                {studiKasusData.tabelTersedia.map((t) => (
                  <div key={t.nama}>
                    <p className="text-xs font-black text-slate-400 mb-2 uppercase">{t.nama}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.kolom.map(k => (
                        <span key={k} className="px-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 shadow-sm">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TASK LIST */}
        <div className="space-y-12">
          {studiKasusData.soal.map((task, idx) => (
            <div key={task.id} className="group relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black shadow-xl shadow-indigo-200 z-30 group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden group-hover:border-indigo-200 transition-all duration-300">
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-black text-slate-800 mb-4 ml-6 tracking-tight text-left">
                    {task.judul}
                  </h3>
                  
                  <div className="bg-indigo-50/50 rounded-2xl p-6 mb-8 border-l-4 border-indigo-500 text-left">
                    <p className="text-slate-700 font-medium leading-relaxed italic">
                      "{task.instruksi}"
                    </p>
                  </div>

                  {/* KISI-KISI SECTION */}
                  <div className="mb-6 text-left">
                    <details className="group/details">
                      <summary className="flex items-center gap-2 text-indigo-600 font-bold text-sm cursor-pointer hover:underline list-none">
                        <HelpCircle size={16} /> Butuh Bantuan? (Lihat Kisi-kisi)
                      </summary>
                      <div className="mt-4 p-4 bg-slate-50 rounded-xl text-sm text-slate-500 border border-dashed border-slate-200">
                        {task.kisi}
                      </div>
                    </details>
                  </div>

                  {/* CODE EDITOR */}
                  <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="px-6 py-3 bg-slate-800/50 flex justify-between items-center border-b border-slate-800">
                       <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-rose-500/20 border border-rose-500/40"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
                          <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40"></div>
                       </div>
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                          <Terminal size={12} /> query_editor.sql
                       </span>
                    </div>
                    
                    <textarea
                      className="w-full bg-transparent p-8 text-indigo-300 font-mono text-lg focus:outline-none min-h-[160px] placeholder:text-slate-700 text-left"
                      placeholder="-- Tulis query SQL di sini..."
                      value={queries[task.id] || ""}
                      onChange={(e) => setQueries({ ...queries, [task.id]: e.target.value })}
                    />

                    <div className="p-4 bg-slate-800/30 border-t border-slate-800 flex justify-end">
                      <button
                        onClick={() => checkAnswer(task.id, queries[task.id] || "", task.jawabanKey)}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-black text-sm transition-all flex items-center gap-2 shadow-lg shadow-indigo-900/20 active:scale-95"
                      >
                        <Play size={16} fill="currentColor" /> Eksekusi Query
                      </button>
                    </div>
                  </div>

                  {/* FEEDBACK SYSTEM & RESULT PREVIEW */}
                  {status[task.id] && (
                    <div className="mt-8 space-y-6 text-left">
                      <div className={`p-6 rounded-[2rem] flex items-center gap-4 border-2 ${
                        status[task.id] === "success" ? "bg-emerald-50 border-emerald-100 text-emerald-800" : "bg-rose-50 border-rose-100 text-rose-800"
                      }`}>
                        <div className={`p-3 rounded-2xl shadow-sm ${status[task.id] === "success" ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"}`}>
                          {status[task.id] === "success" ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                        </div>
                        <div>
                          <p className="font-black text-base m-0 tracking-tight uppercase">
                            {status[task.id] === "success" ? "Query Berhasil Dieksekusi" : "Kesalahan Logika Query"}
                          </p>
                          <p className="text-xs opacity-75 m-0 font-medium mt-0.5">
                            {status[task.id] === "success" 
                              ? "Sistem berhasil menarik data. Lihat pratinjau tabel di bawah." 
                              : "Sintaks salah atau filter tidak sesuai. Coba cek kisi-kisi."}
                          </p>
                        </div>
                      </div>

                      {status[task.id] === "success" && task.expectedData && (
                        <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm border-collapse">
                              <thead>
                                <tr className="bg-slate-50">
                                  {Object.keys(task.expectedData[0]).map((key) => (
                                    <th key={key} className="px-8 py-4 text-slate-500 font-black uppercase text-[10px] tracking-wider border-b border-slate-100">
                                      {key.replace("_", " ")}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-50">
                                {task.expectedData.map((row, i) => (
                                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    {Object.values(row).map((val, j) => (
                                      <td key={j} className="px-8 py-4 text-slate-700 font-mono text-xs">{val}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* FINAL CTA */}
          <div className="pt-10 text-center">
             <button className="inline-flex items-center gap-3 bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 group">
                Selesaikan Laporan <ArrowRight className="group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}