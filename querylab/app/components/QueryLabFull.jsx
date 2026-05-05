"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, ImageIcon, X, BrainCircuit, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QueryLabFull() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "🎓 Selamat datang di AI Mentor QueryLab!\n\nSaya akan membantu kamu belajar SQL dengan metode 'Guide Error'. Kirim query SQL kamu, dan saya akan memberikan query yang masih salah beserta komentar perbaikan.\n\nContoh: `SELECT * FROM users;` → `SELECT * FROM users -- ❌ diubah: perlu WHERE clause`\n\nSiap belajar? 🚀"
    }
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
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.readAsDataURL(image);
        });
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText, mode: 'error', image: imageBase64 }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
      } else {
        throw new Error("Gagal mendapatkan balasan");
      }
    } catch (error) {
      setMessages((prev) => [...prev, {
        role: "bot",
        text: "❌ Maaf, terjadi kesalahan koneksi.\n\nPastikan:\n• API key Gemini sudah benar di file `.env`\n• Koneksi internet stabil\n• Server development sedang berjalan\n\nCoba lagi ya! 🔄"
      }]);
    } finally {
      setLoading(false);
      setImage(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full h-full flex flex-col bg-white overflow-hidden"
    >
      {/* HEADER */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 flex items-center justify-between shrink-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg">
            <BrainCircuit size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold">AI Mentor QueryLab</h1>
            <div className="text-sm text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-flex" />
              <span>Online • Mode: Guide Error Learning</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 relative z-10">
          <div className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
            AI-Powered
          </div>
        </div>
      </div>

      {/* BODY CHAT */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-slate-50 to-white">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`flex items-start gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              {/* AVATAR */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                  : "bg-gradient-to-r from-slate-600 to-slate-700"
              }`}>
                {msg.role === "user" ? (
                  <MessageSquare size={16} className="text-white" />
                ) : (
                  <BrainCircuit size={16} className="text-white" />
                )}
              </div>

              {/* MESSAGE BUBBLE */}
              <div className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} max-w-[80%]`}>
                <div className={`p-4 rounded-2xl shadow-lg ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-md"
                      : "bg-white border border-slate-200 text-slate-800 rounded-tl-md"
                }`}>
                  {msg.img && (
                    <img
                      src={msg.img}
                      alt="attachment"
                      className="max-w-full max-h-64 object-contain rounded-xl mb-3 border border-slate-200"
                    />
                  )}
                  <p className="whitespace-pre-wrap text-sm leading-relaxed break-words">{msg.text}</p>
                </div>

                {/* TIMESTAMP */}
                <span className="text-xs text-slate-400 mt-1 px-2">
                  {new Date().toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* LOADING INDICATOR */}
        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 max-w-[85%]"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center shadow-md">
              <BrainCircuit size={16} className="text-white" />
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-md shadow-lg">
              <div className="flex items-center gap-2 text-slate-600">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm">AI sedang menganalisis query kamu...</span>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA */}
      <div className="p-6 bg-white border-t border-slate-100 shrink-0">
        {/* IMAGE PREVIEW */}
        <AnimatePresence>
          {preview && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="relative w-20 h-20 mb-4 inline-block"
            >
              <img
                src={preview}
                className="w-full h-full object-cover rounded-2xl border-2 border-indigo-300 shadow-lg"
                alt="Preview"
              />
              <button
                onClick={() => {setPreview(null); setImage(null)}}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors shadow-lg"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* INPUT CONTROLS */}
        <div className="flex items-end gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-300 transition-all duration-200">
          <motion.button
            onClick={() => fileInputRef.current.click()}
            className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-xl transition-all duration-200 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ImageIcon size={24} />
          </motion.button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
            accept="image/*"
          />

          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (!loading) handleSend();
                }
              }}
              placeholder="Ketik query SQL kamu di sini... (Enter untuk kirim, Shift+Enter untuk baris baru)"
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 transition-all duration-200 resize-none min-h-[44px] max-h-32"
              rows={1}
              style={{ height: 'auto', minHeight: '44px' }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 128) + 'px';
              }}
            />
          </div>

          <motion.button
            onClick={handleSend}
            disabled={loading || (!input.trim() && !image)}
            className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-300 disabled:to-slate-400 transition-all duration-200 shadow-lg disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={20} />
          </motion.button>
        </div>

        {/* HELP TEXT */}
        <div className="mt-3 text-center">
          <p className="text-xs text-slate-500">
            💡 Tip: Kirim query SQL dan AI akan memberikan query yang salah dengan komentar perbaikan untuk belajar lebih efektif
          </p>
        </div>
      </div>
    </motion.div>
  );
}