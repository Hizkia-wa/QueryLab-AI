import { Link } from "react-router-dom";
import { BookOpen, ChevronRight, BarChart, Clock, Sparkles } from "lucide-react";
import modulData from "../data/modul";
import materiData from "../data/materi"; // Pastikan data materi tersedia

function MateriListPage() {
  
  // LOGIKA UTAMA: Mencari ID materi pertama yang memiliki modulId yang sama
  // Sama seperti logika 'filteredSoal' di referensi kamu
  const getFirstMateriId = (mId) => {
    const matchingMateri = materiData
      .filter((m) => m.modulId === mId)
      .sort((a, b) => a.id - b.id); // Urutkan agar selalu mengambil yang paling awal

    return matchingMateri.length > 0 ? matchingMateri[0].id : null;
  };

  const countMateri = (mId) => {
    return materiData.filter((m) => m.modulId === mId).length;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-16 font-sans">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-2xl bg-indigo-50 border border-indigo-100 shadow-sm">
          <Sparkles size={16} className="text-indigo-600" />
          <span className="text-indigo-600 text-[10px] font-black tracking-widest uppercase">
            Kurikulum SQL 2026
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Daftar Materi <span className="text-indigo-600">SQL</span>
        </h1>
      </div>

      {/* GRID SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modulData.map((modul) => {
          // Ambil ID materi pertama berdasarkan modulId saat ini
          const firstId = getFirstMateriId(modul.modulId);
          const total = countMateri(modul.modulId);

          return (
            <div 
              key={modul.modulId} 
              className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <BookOpen size={26} />
                  </div>
                  <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                    modul.level === "Beginner" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"
                  }`}>
                    {modul.level}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">
                  {modul.title}
                </h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed opacity-80">
                  {modul.description}
                </p>
                
                <div className="flex items-center gap-6 text-[11px] font-black text-slate-400 mb-10 pt-6 border-t border-slate-50 uppercase tracking-[0.1em]">
                  <span className="flex items-center gap-2"><Clock size={16}/> {modul.estimasi}</span>
                  <span className="flex items-center gap-2"><BarChart size={16}/> {total} MATERI</span>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <Link
                // Navigasi ke ID materi pertama milik modulId ini
                to={firstId ? `/materi/${firstId}` : "#"}
                className={`group/btn relative flex items-center justify-center gap-3 w-full py-4 rounded-[1.25rem] font-bold transition-all duration-300 ${
                  firstId 
                  ? "bg-slate-900 text-white hover:bg-indigo-600 shadow-lg" 
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                <span>{firstId ? "Buka Modul" : "Segera Hadir"}</span>
                {firstId && <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MateriListPage;