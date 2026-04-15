import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code2, Terminal, GraduationCap, ChevronRight, 
  Database, Zap, BrainCircuit, AlertCircle, CheckCircle2, Trophy 
} from "lucide-react";

export default function Homepage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] overflow-x-hidden text-left">
      
      {/* --- Floating Icons (Interactive Background) --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <Database className="absolute top-[20%] left-[10%] text-indigo-200/50 animate-float" size={40} />
        <Code2 className="absolute bottom-[30%] left-[15%] text-purple-200/50 animate-float-delayed" size={32} />
        <BrainCircuit className="absolute top-[40%] right-[12%] text-pink-200/50 animate-float" size={48} />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/30 blur-[120px]" />
      </div>

      <main className="w-full">
        
        {/* --- Hero Section --- */}
        <section className="container mx-auto pt-40 lg:pt-52 px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-8 uppercase tracking-widest">
              <Zap size={14} className="fill-current" />
              <span>Era Baru Belajar Database</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8">
              SQL Tanpa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                Rasa Bingung.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium">
              Lupakan materi PDF yang membosankan. Belajar SQL lewat interaksi langsung dengan mentor AI yang paham setiap baris kode kamu.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
              <Link 
                to="/praktikum"
                className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Pilih Modul <ChevronRight size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* --- Interactive Terminal --- */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <div className="bg-slate-900 rounded-[2rem] overflow-hidden">
                <div className="px-6 py-4 bg-slate-800/50 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-2">ai-auto-suggest.sql</span>
                </div>
                <div className="p-8 font-mono text-sm">
                  <p className="text-pink-400">SELECT <span className="text-indigo-300">user_name, progress</span></p>
                  <p className="text-pink-400">FROM <span className="text-indigo-300">querylab_students</span></p>
                  <p className="text-pink-400">WHERE <span className="text-emerald-400">status = 'active';</span></p>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-[2px] bg-indigo-500 mt-4" 
                  />
                </div>
              </div>
            </div>
            {/* AI Chip Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
               <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <BrainCircuit size={20} />
               </div>
               <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">AI Mentor</p>
                  <p className="text-sm font-bold">Query kamu sangat optimal!</p>
               </div>
            </div>
          </motion.div>
        </section>

        {/* --- The Problem Section (Why QueryLab?) --- */}
        <section className="w-full py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8 text-slate-900">
                  Kenapa Belajar SQL <br /> Terasa Sangat Sulit?
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: <AlertCircle className="text-red-500" />, text: "Error yang membingungkan tanpa penjelasan manusiawi." },
                    { icon: <AlertCircle className="text-red-500" />, text: "Materi teori yang tidak relevan dengan kebutuhan praktis." },
                    { icon: <AlertCircle className="text-red-500" />, text: "Setup database yang rumit hanya untuk mulai belajar." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-slate-100">
                      {item.icon}
                      <p className="font-semibold text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
                <div className="relative z-10">
                  <CheckCircle2 className="mb-6 opacity-50" size={48} />
                  <h3 className="text-3xl font-bold mb-6">Itulah Alasan <br /> QueryLab Lahir.</h3>
                  <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                    Kami menghancurkan semua hambatan tersebut. Kami membuat belajar SQL jadi semudah chatting, secepat mengeksekusi kode di cloud.
                  </p>
                  
                  <Link 
                    to="/solusi"
                    className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all hover:scale-105 shadow-lg"
                  >
                    Pelajari Solusi Kami
                  </Link>
                </div>
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                  <Database size={300} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Features Section (Value Based & Functional) --- */}
        <section className="w-full bg-[#0B1120] py-32 px-6">
          <div className="max-w-7xl mx-auto text-left">
            <div className="text-center mb-20">
              <h2 className="text-white text-4xl lg:text-5xl font-black mb-6">Lebih Dari Sekadar Coding.</h2>
              <p className="text-slate-400 text-xl font-medium">Kami memberikan fitur yang dirancang khusus untuk kemudahan belajar Anda.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Kartu 1: Instant AI Feedback */}
              <div className="group p-10 bg-[#161E31] border border-slate-800 rounded-[2.5rem] hover:border-indigo-500/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8">
                  <BrainCircuit size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Instant AI Feedback</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Jangan buang waktu mencari jawaban di Google. AI kami menjelaskan letak error kamu saat itu juga.
                </p>
              </div>

              {/* Kartu 2: Praktikum Langsung */}
              <div className="group p-10 bg-[#161E31] border border-slate-800 rounded-[2.5rem] hover:border-indigo-500/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8">
                  <Terminal size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Praktikum Langsung</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Tulis dan eksekusi query SQL kamu di dalam platform secara real-time untuk melihat langsung hasil tabel data yang kamu olah.
                </p>
              </div>

              {/* Kartu 3: Challenge Studi Kasus */}
              <div className="group p-10 bg-[#161E31] border border-slate-800 rounded-[2.5rem] hover:border-indigo-500/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8">
                  <Trophy size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Challenge Studi Kasus</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Uji kemampuan kamu dengan berbagai skenario kasus yang dirancang untuk mengasah logika pemecahan masalah menggunakan SQL.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}