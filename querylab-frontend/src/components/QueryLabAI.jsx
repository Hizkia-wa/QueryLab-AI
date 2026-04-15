import React, { useState, useRef } from "react";
import { Send, BrainCircuit, Sparkles, X, Paperclip, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QueryLabAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: "bot", text: "Halo Hizkia! Kirim soal atau foto tugas SQL-mu di sini." }]);
  const fileInputRef = useRef(null);

  // Ubah gambar ke Base64
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
    const currentMessages = [...messages, { role: "user", text: userText, img: preview }];
    setMessages(currentMessages);
    setInput("");
    setPreview(null);

    let imageBase64 = null;
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      imageBase64 = await new Promise((resolve) => {
        reader.onload = () => resolve(reader.result.split(',')[1]);
      });
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText, image: imageBase64 }),
      });
      const data = await response.json();
      setMessages([...currentMessages, { role: "bot", text: data.reply }]);
    } catch (err) {
      setMessages([...currentMessages, { role: "bot", text: "Maaf, server sedang sibuk." }]);
    } finally {
      setLoading(false);
      setImage(null);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-indigo-600 text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 transition-all">
        {isOpen ? <X size={28} /> : <BrainCircuit size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} className="absolute bottom-24 right-0 w-[380px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
            <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles size={20} className="text-indigo-400" />
                <h4 className="font-bold text-sm">QueryLab AI Mentor</h4>
              </div>
            </div>

            <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.role === "user" ? "bg-indigo-600 text-white rounded-tr-none shadow-md" : "bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm"}`}>
                    {msg.img && <img src={msg.img} alt="upload" className="w-full h-32 object-cover rounded-lg mb-2" />}
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && <div className="text-[10px] text-slate-400 animate-pulse">Analisis tugas sedang berjalan...</div>}
            </div>

            <div className="p-4 bg-white border-t border-slate-100 space-y-3">
              {preview && (
                <div className="relative w-20 h-20">
                  <img src={preview} className="w-full h-full object-cover rounded-lg border border-slate-200" />
                  <button onClick={() => {setPreview(null); setImage(null)}} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"><X size={12}/></button>
                </div>
              )}
              <div className="flex gap-2">
                <button onClick={() => fileInputRef.current.click()} className="p-3 bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-200 transition-colors">
                  <ImageIcon size={20} />
                </button>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSend()} placeholder="Ketik soal atau lampirkan foto..." className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
                <button onClick={handleSend} disabled={loading} className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:bg-slate-300">
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