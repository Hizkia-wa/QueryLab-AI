import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, ImageIcon, X } from "lucide-react";

export default function QueryLabFull() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Selamat datang di Panel Mentor QueryLab! Ada yang bisa saya bantu hari ini?" }
  ]);
  
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSend = async () => {
    if (!input.trim() && !image) return;

    setLoading(true);
    const userText = input;
    const userImgPreview = preview;

    setMessages((prev) => [...prev, { role: "user", text: userText, img: userImgPreview }]);
    setInput("");
    setPreview(null);

    try {
      let imageBase64 = null;
      if (image) {
        const reader = new FileReader();
        imageBase64 = await new Promise((resolve) => {
          reader.onload = () => resolve(reader.result.split(',')[1]); // Ambil string base64 bersih
          reader.readAsDataURL(image);
        });
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText, image: imageBase64 }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
      } else {
        throw new Error("Gagal mendapatkan balasan");
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", text: "Aduh, koneksi ke otak AI terputus. Cek folder api-mu!" }]);
    } finally {
      setLoading(false);
      setImage(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-[80vh] flex flex-col bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden my-4">
      {/* HEADER */}
      <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Sparkles className="text-indigo-400" />
          <h1 className="font-bold">QueryLab Professional Mentor</h1>
        </div>
      </div>

      {/* BODY CHAT */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
        {messages.map((msg, i) => (
          <div key={i} className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} max-w-[80%]`}>
              <div className={`p-4 rounded-2xl shadow-sm ${
                  msg.role === "user" 
                  ? "bg-indigo-600 text-white rounded-tr-none" 
                  : "bg-white text-slate-800 border border-slate-200 rounded-tl-none"
              }`}>
                {msg.img && <img src={msg.img} alt="attachment" className="max-w-full max-h-72 object-contain rounded-lg mb-2" />}
                <p className="whitespace-pre-wrap text-sm leading-relaxed break-words">{msg.text}</p>
              </div>
            </div>
          </div>
        ))}
        {loading && <div className="flex gap-2 items-center text-indigo-500 text-xs animate-pulse"><Sparkles size={14}/> Mentor sedang berpikir...</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA */}
      <div className="p-6 bg-white border-t border-slate-100 shrink-0">
        {preview && (
          <div className="relative w-24 h-24 mb-4">
            <img src={preview} className="w-full h-full object-cover rounded-xl border-2 border-indigo-500" alt="Preview" />
            <button onClick={() => {setPreview(null); setImage(null)}} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"><X size={14}/></button>
          </div>
        )}

        <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
          <button onClick={() => fileInputRef.current.click()} className="p-2 text-slate-400 hover:text-indigo-600"><ImageIcon size={24} /></button>
          <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Masukkan perintah SQL atau kirimkan soal coding..."
            className="flex-1 bg-transparent border-none py-3 outline-none text-sm text-slate-700"
          />
          <button onClick={handleSend} disabled={loading || (!input.trim() && !image)} className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 disabled:bg-slate-300 transition-all shadow-md">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}