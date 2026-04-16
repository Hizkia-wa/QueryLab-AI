import React from "react";
import { BookOpen, FileQuestion, Terminal, Trophy, Sparkles, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SolutionPage() {
  const navigate = useNavigate();
  const solusiFitur = [
    {
      step: "01",
      icon: <BookOpen className="text-indigo-600" size={28} />,
      title: "Materi SQL Interaktif",
      desc: "Langkah awal membangun fondasi. Materi terstruktur dari dasar ke menengah yang dilengkapi contoh query untuk melihat hubungan perintah dan output secara langsung."
    },
    {
      step: "02",
      icon: <FileQuestion className="text-emerald-500" size={28} />,
      title: "Kuis Teori",
      desc: "Validasi pemahaman Anda sebelum melangkah jauh. Kumpulan soal teori untuk mengukur penguasaan konsep dasar hingga lanjutan secara mendalam."
    },
    {
      step: "03",
      icon: <Terminal className="text-sky-500" size={28} />,
      title: "Praktikum SQL Interaktif",
      desc: "Waktunya mencoba! Tulis dan jalankan query di lingkungan sandbox real-time tanpa perlu instalasi tools tambahan di perangkat Anda."
    },
    {
      step: "04",
      icon: <Trophy className="text-rose-500" size={28} />,
      title: "Challenge Studi Kasus",
      desc: "Uji ketajaman problem solving dengan skenario dunia nyata yang kompleks. Dirancang untuk mensimulasikan penerapan SQL di lingkungan industri."
    },
    {
      step: "05",
      icon: <Sparkles className="text-white" size={28} />,
      title: "AI Guided Error",
      desc: "Puncak inovasi kami. AI tidak memberi jawaban instan, melainkan memberikan 'kesalahan terarah' dan petunjuk untuk melatih logika analisis mandiri Anda."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-left selection:bg-indigo-100">
      
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto pt-24 pb-16 px-6">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-black tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
          The QueryLab Roadmap
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
          Alur Belajar yang <br />
          <span className="text-indigo-600">Terukur & Terarah.</span>
        </h2>
        <p className="max-w-3xl text-lg text-slate-500 leading-relaxed">
          Kami menyusun fitur kami dalam urutan yang logis untuk memastikan transisi yang mulus 
          dari seorang pemula menjadi ahli data yang kritis.
        </p>
      </div>

      {/* FITUR SEQUENTIAL GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solusiFitur.map((item, idx) => (
            <div 
              key={idx} 
              className={`group p-10 rounded-[2.5rem] border transition-all duration-500 relative ${
                item.title === "AI Guided Error" 
                ? "bg-indigo-600 border-indigo-500 shadow-2xl shadow-indigo-200 md:col-span-2 lg:col-span-1" 
                : "bg-slate-50 border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-2"
              }`}
            >
              {/* Step Number Indicator */}
              <span className={`absolute top-8 right-10 text-4xl font-black opacity-10 ${
                item.title === "AI Guided Error" ? "text-white" : "text-slate-900"
              }`}>
                {item.step}
              </span>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${
                item.title === "AI Guided Error" ? "bg-white/20 text-white" : "bg-white shadow-slate-200"
              }`}>
                {item.icon}
              </div>
              
              <h3 className={`text-2xl font-black mb-4 tracking-tight ${
                item.title === "AI Guided Error" ? "text-white" : "text-slate-800"
              }`}>
                {item.title}
              </h3>
              
              <p className={`leading-relaxed text-sm ${
                item.title === "AI Guided Error" ? "text-indigo-50" : "text-slate-500"
              }`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="max-w-md">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Sudah Siap Melangkah?</h3>
              <p className="text-slate-400 leading-relaxed">
                Ikuti urutan belajar ini dan lihat bagaimana kemampuan analisis data Anda berkembang pesat.
              </p>
            </div>
            
          <button
  onClick={() => navigate("/materi")}
  className="group px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-500 transition-all flex items-center gap-3 shadow-2xl shadow-indigo-900/40 active:scale-95"
>
  Mulai Belajar Sekarang 
  <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
</button>
          </div>
        </div>
      </div>

    </div>
  );
}