import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, ImageIcon, X } from "lucide-react";

export default function QueryLabFull() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Selamat datang di Panel Mentor QueryLab! Ada yang bisa saya bantu hari ini?" }
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    // Container Utama: Tinggi penuh layar, lebar maksimal 5xl (lebar standar chat)
    <div className="max-w-5xl mx-auto h-[85vh] flex flex-col bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden my-4">
      
      {/* HEADER FULL */}
      <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="text-indigo-400" />
          <h1 className="font-bold">QueryLab Professional Mentor</h1>
        </div>
      </div>

      {/* BODY CHAT (Flex-1 agar meluas ke bawah) */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[70%] p-4 rounded-2xl shadow-sm ${
                msg.role === "user" 
                ? "bg-indigo-600 text-white rounded-tr-none" 
                : "bg-white text-slate-800 border border-slate-200 rounded-tl-none"
            }`}>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA DI BAWAH */}
      <div className="p-6 bg-white border-t border-slate-100">
        <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-2xl px-4">
          <ImageIcon className="text-slate-400 cursor-pointer hover:text-indigo-600" size={24} />
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Masukkan perintah SQL atau kirimkan soal coding..."
            className="flex-1 bg-transparent border-none py-3 outline-none text-sm"
          />
          <button className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-all shadow-md">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
