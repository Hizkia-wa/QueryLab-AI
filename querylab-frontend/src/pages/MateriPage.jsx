import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ChevronLeft, 
  BookOpen, 
  Code2, 
  Lightbulb, 
  ArrowRight, 
  PlayCircle 
} from "lucide-react";
import materiData from "../data/materi";
import modulData from "../data/modul";

function MateriDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. Cari data materi aktif berdasarkan ID dari URL
  const materiAktif = materiData.find((m) => m.id === Number(id));

  // 2. Cari info modul induknya untuk label atau judul
  const infoModul = modulData.find((mod) => mod.id === materiAktif?.modulId);

  // 3. Filter sidebar: hanya munculkan materi yang berada di modul yang sama
  const daftarSubBab = materiData.filter(
    (m) => m.modulId === materiAktif?.modulId
  );

  // 4. Cari materi berikutnya (untuk tombol navigasi di bawah)
  const currentIndex = daftarSubBab.findIndex((m) => m.id === Number(id));
  const materiBerikutnya = daftarSubBab[currentIndex + 1];

  // Auto scroll ke atas setiap ganti materi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!materiAktif) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800">Materi tidak ditemukan</h2>
        <Link to="/materi" className="mt-4 text-indigo-600 hover:underline">
          Kembali ke Daftar Modul
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      
      {/* --- SIDEBAR NAVIGASI --- */}
      <aside className="w-80 bg-white border-r border-slate-200 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-slate-100">
          <Link to="/materi" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors text-sm font-semibold mb-6">
            <ChevronLeft size={18} />
            Kembali ke Modul
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Modul {materiAktif.modulId}</p>
              <h4 className="font-bold text-slate-800 text-sm line-clamp-1">{infoModul?.title}</h4>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {daftarSubBab.map((sub, index) => (
            <Link
              key={sub.id}
              to={`/materi/${sub.id}`}
              className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group ${
                sub.id === Number(id)
                  ? "bg-indigo-50 border border-indigo-100 shadow-sm"
                  : "hover:bg-slate-50 border border-transparent"
              }`}
            >
              <span className={`text-xs font-bold mt-0.5 ${sub.id === Number(id) ? "text-indigo-600" : "text-slate-400"}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={`text-sm font-medium leading-snug ${sub.id === Number(id) ? "text-indigo-700" : "text-slate-600"}`}>
                {sub.title}
              </span>
            </Link>
          ))}
        </div>
      </aside>

      {/* --- KONTEN UTAMA --- */}
      <main className="flex-1 px-6 py-12 lg:px-16 overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Materi */}
          <header className="mb-10">
            <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              <span>SQL Course</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span className="text-indigo-600">Modul {materiAktif.modulId}</span>
            </nav>
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
              {materiAktif.title}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              {materiAktif.deskripsi}
            </p>
          </header>

          {/* Card Penjelasan */}
          <section className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6 text-indigo-600">
              <BookOpen size={24} />
              <h3 className="text-xl font-bold text-slate-800">Penjelasan</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              {materiAktif.penjelasan}
            </p>
          </section>

          {/* Card Sintaks & Kode */}
          {materiAktif.sintaks && (
            <section className="bg-slate-900 rounded-[2rem] p-8 shadow-xl mb-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-white">
                <Code2 size={80} />
              </div>
              <div className="flex items-center gap-3 mb-6 text-indigo-400 relative z-10">
                <Code2 size={24} />
                <h3 className="text-xl font-bold text-white">Sintaks & Contoh</h3>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Struktur Dasar</p>
                  <pre className="bg-slate-800/50 p-4 rounded-xl text-indigo-300 font-mono text-sm border border-slate-700">
                    {materiAktif.sintaks}
                  </pre>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Contoh Query</p>
                  <pre className="bg-[#0f172a] p-5 rounded-xl text-emerald-400 font-mono text-base border border-slate-800 shadow-inner">
                    {materiAktif.contoh}
                  </pre>
                </div>
              </div>
            </section>
          )}

          {/* Card Catatan/Tips */}
          <section className="bg-amber-50 rounded-[2rem] border border-amber-100 p-8 mb-12">
            <div className="flex items-center gap-3 mb-4 text-amber-600">
              <Lightbulb size={24} />
              <h3 className="text-xl font-bold text-amber-900">Tips & Catatan</h3>
            </div>
            <p className="text-amber-800/80 italic leading-relaxed">
              "{materiAktif.catatan}"
            </p>
          </section>

          {/* FOOTER NAVIGASI */}
          <footer className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-slate-200">
            <Link 
              to={`/praktikum/${materiAktif.modulId}`}
              className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-200 active:scale-95"
            >
              <PlayCircle size={20} />
              Mulai Praktikum
            </Link>

            {materiBerikutnya && (
              <Link 
                to={`/materi/${materiBerikutnya.id}`}
                className="flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all group shadow-sm"
              >
                Materi Selanjutnya
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </footer>
        </div>
      </main>
    </div>
  );
}

export default MateriDetailPage;