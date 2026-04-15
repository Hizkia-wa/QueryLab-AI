import React, { useState, useRef, useEffect } from "react";
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
  
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Auto scroll ke bawah
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() && !image) return;
    setLoading(true);
    const userText = input;
    const userImg = preview;
    setMessages(prev => [...prev, { role: "user", text: userText, img: userImg }]);
    setInput("");
    setPreview(null);
    setImage(null);
    
    // Simulasi atau Fetch API kamu di sini...
    setTimeout(() => {
        setMessages(prev => [...prev, { role: "bot", text: "Siap! Kueri kamu sedang diproses." }]);
        setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-indigo-600 text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 transition-all">
        {isOpen ? <X size={28} /> : <BrainCircuit size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 20, scale: 0.95 }} 
            // Perbaikan di sini: max-height menggunakan vh (view height) agar tidak kepotong
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] max-h-[75vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
          >
            <div className="bg-slate-900 p-5 text-white flex items-center gap-3 shrink-0">
              <div className="p-2 bg-indigo-500 rounded-lg"><Sparkles size={18} /></div>
              <div>
                <h4 className="font-bold text-sm">QueryLab Mentor AI</h4>
                <p className="text-[10px] text-slate-400">Online & Siap Membantu</p>
              </div>
            </div>

            {/* Area Chat - flex-1 agar mengikuti tinggi max-h */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 min-h-[300px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-indigo-600 text-white rounded-tr-none" : "bg-white border border-slate-200 text-slate-800 rounded-tl-none"}`}>
                    {msg.img && <img src={msg.img} alt="upload" className="w-full max-h-48 object-contain rounded-lg mb-2" />}
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
              {loading && <div className="text-indigo-500 text-[10px] animate-pulse">Sedang berpikir...</div>}
            </div>

            {/* Input - shrink-0 agar tidak mengecil */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              {preview && (
                <div className="relative w-16 h-16 mb-2">
                  <img src={preview} className="w-full h-full object-cover rounded-md" />
                  <button onClick={() => {setPreview(null); setImage(null)}} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5"><X size={10}/></button>
                </div>
              )}
              <div className="flex gap-2">
                <button onClick={() => fileInputRef.current.click()} className="p-2.5 text-slate-400 hover:text-indigo-600 rounded-xl">
                  <ImageIcon size={20} />
                </button>
                <input type="file" ref={fileInputRef} onChange={(e) => {
                    const file = e.target.files[0];
                    if(file) {
                        setImage(file);
                        setPreview(URL.createObjectURL(file));
                    }
                }} className="hidden" accept="image/*" />
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} placeholder="Tanya soal SQL..." className="flex-1 bg-slate-100 rounded-xl px-4 py-2 text-sm outline-none" />
                <button onClick={handleSend} className="p-2.5 bg-indigo-600 text-white rounded-xl"><Send size={20} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}