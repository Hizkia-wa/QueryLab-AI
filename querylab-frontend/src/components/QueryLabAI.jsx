import React, { useState, useRef } from "react";
import { Send, BrainCircuit, Sparkles, X, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QueryLabAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Halo the Q-Selectors! Ada kendala dengan tugas SQL atau coding-mu? Kirim soal atau fotonya di sini ya." }
  ]);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if (!input.trim() && !image) return;
    
    setLoading(true);
    const userText = input;
    const userImg = preview;
    
    // Tambah pesan user ke layar
    setMessages(prev => [...prev, { role: "user", text: userText, img: userImg }]);
    setInput("");
    setPreview(null);

    try {
      let imageBase64 = null;
      if (image) {
        const reader = new FileReader();
        imageBase64 = await new Promise((resolve) => {
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.readAsDataURL(image);
        });
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText, image: imageBase64 }),
      });

      if (!response.ok) throw new Error("Gagal menghubungi server");

      const data = await response.json();

      // Pastikan mengambil data.reply
      if (data && data.reply) {
        setMessages(prev => [...prev, { role: "bot", text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: "bot", text: "Format jawaban salah, tapi koneksi aman!" }]);
      }

    } catch (err) {
      setMessages(prev => [...prev, { role: "bot", text: "Aduh, koneksi ke otak AI terputus. Coba cek folder api-mu ya!" }]);
    } finally {
      setLoading(false);
      setImage(null);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-indigo-600 text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 transition-all active:scale-95">
        {isOpen ? <X size={28} /> : <BrainCircuit size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-slate-900 p-5 text-white flex items-center gap-3">
              <div className="p-2 bg-indigo-500 rounded-lg"><Sparkles size={18} /></div>
              <div>
                <h4 className="font-bold text-sm">QueryLab Mentor AI</h4>
                <p className="text-[10px] text-slate-400">Online & Siap Membantu</p>
              </div>
            </div>

            <div className="h-[450px] overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-indigo-600 text-white rounded-tr-none" : "bg-white border border-slate-200 text-slate-800 rounded-tl-none"}`}>
                    {msg.img && <img src={msg.img} alt="upload" className="w-full max-h-48 object-contain rounded-lg mb-2" />}
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {loading && <div className="flex gap-1 text-indigo-500 text-[10px] font-medium animate-pulse">Sedang berpikir...</div>}
            </div>

            <div className="p-4 bg-white border-t border-slate-100">
              {preview && (
                <div className="relative w-16 h-16 mb-2">
                  <img src={preview} className="w-full h-full object-cover rounded-md" />
                  <button onClick={() => {setPreview(null); setImage(null)}} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5"><X size={10}/></button>
                </div>
              )}
              <div className="flex gap-2">
                <button onClick={() => fileInputRef.current.click()} className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                  <ImageIcon size={20} />
                </button>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} placeholder="Tanya soal SQL..." className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
                <button onClick={handleSend} disabled={loading} className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:bg-slate-300 transition-all">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}