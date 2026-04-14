import { Link } from "react-router-dom";
import { BookOpen, ChevronRight, BarChart, Clock, Sparkles } from "lucide-react";
import modulData from "../data/modul";

function MateriListPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-16 font-sans">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-2xl bg-indigo-50 border border-indigo-100 shadow-sm">
          <Sparkles size={16} className="text-indigo-600" />
          <span className="text-indigo-600 text-xs font-bold tracking-widest uppercase">
            Kurikulum SQL 2026
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Daftar Materi <span className="text-indigo-600">SQL</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Pelajari teknik manipulasi database dari dasar hingga level arsitek data dengan modul yang terstruktur dan interaktif.
        </p>
      </div>

      {/* --- GRID MODUL --- */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {modulData.map((modul) => (
          <div
            key={modul.id}
            className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] hover:-translate-y-3 transition-all duration-500"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
               <BookOpen size={120} />
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                {/* ICON BOX */}
                <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-200 transition-all duration-300">
                  <BookOpen size={26} />
                </div>

                {/* BADGE LEVEL */}
                <span
                  className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] shadow-sm
                    ${
                      modul.level === "Beginner"
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                        : modul.level === "Intermediate"
                        ? "bg-amber-50 text-amber-600 border border-amber-100"
                        : "bg-rose-50 text-rose-600 border border-rose-100"
                    }
                  `}
                >
                  {modul.level}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">
                {modul.title}
              </h3>

              <p className="text-slate-500 text-sm mb-8 leading-relaxed opacity-80">
                {modul.description}
              </p>

              {/* STATS FOOTER */}
              <div className="flex items-center gap-6 text-[11px] font-black text-slate-400 mb-10 pt-6 border-t border-slate-50 uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-indigo-400"/> 25 MIN
                </span>
                <span className="flex items-center gap-2">
                  <BarChart size={16} className="text-indigo-400"/> {modul.lessons?.length || '3'} MATERI
                </span>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <Link
              to={`/materi/${modul.id}`}
              className="group/btn relative flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white rounded-[1.25rem] font-bold overflow-hidden transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200"
            >
              <span className="relative z-10">Buka Modul</span>
              <ChevronRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      {/* FOOTER HINT */}
      <div className="mt-20 text-center">
        <p className="text-slate-400 text-sm font-medium">
          Ada pertanyaan? <a href="#" className="text-indigo-600 hover:underline">Hubungi Mentor</a>
        </p>
      </div>
    </div>
  );
}

export default MateriListPage;