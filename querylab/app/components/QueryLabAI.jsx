"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, BrainCircuit, Sparkles, X, ImageIcon, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QueryLabAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 Halo! Saya AI Mentor QueryLab. Ada pertanyaan tentang SQL atau coding? Kirim saja query atau foto soalmu!" }
  ]);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() && !image) return;
    setLoading(true);
    const userText = input;
    const userImg = preview;
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
        body: JSON.stringify({ prompt: userText, mode: 'error', image: imageBase64 }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: "bot", text: data.reply }]);
      } else if (data.error) {
        setMessages(prev => [...prev, { role: "bot", text: `❌ ${data.error}` }]);
      } else {
        setMessages(prev => [...prev, { role: "bot", text: "❌ AI tidak merespons. Coba lagi nanti." }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: "bot", text: `❌ Koneksi terputus. ${err.message || "Pastikan API key Gemini benar."}` }]);
    } finally {
      setLoading(false);
      setImage(null);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* FLOATING BUTTON */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* PULSE ANIMATION WHEN CLOSED */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-2xl bg-indigo-400 animate-ping opacity-20"></div>
        )}
      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-[380px] max-w-[calc(100vw-2rem)] max-h-[70vh] bg-white rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden flex flex-col backdrop-blur-sm"
          >
            {/* HEADER */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                  <BrainCircuit size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">AI Mentor QueryLab</h4>
                  <p className="text-[10px] text-slate-300">Online • Guide Error Mode</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Online</span>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white min-h-[300px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-md"
                      : "bg-white border border-slate-200 text-slate-800 rounded-tl-md"
                  }`}>
                    {msg.img && (
                      <img src={msg.img} alt="upload" className="w-full max-h-32 object-contain rounded-lg mb-2 border border-slate-200" />
                    )}
                    <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-indigo-600 text-xs"
                >
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span>AI sedang berpikir...</span>
                </motion.div>
              )}
            </div>

            {/* INPUT AREA */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              {preview && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="relative w-16 h-16 mb-3 inline-block"
                >
                  <img src={preview} className="w-full h-full object-cover rounded-xl border-2 border-indigo-300" />
                  <button
                    onClick={() => {setPreview(null); setImage(null)}}
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </motion.div>
              )}

              <div className="flex gap-2">
                <motion.button
                  onClick={() => fileInputRef.current.click()}
                  className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ImageIcon size={20} />
                </motion.button>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if(file) {
                      setImage(file);
                      setPreview(URL.createObjectURL(file));
                    }
                  }}
                  className="hidden"
                  accept="image/*"
                />

                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !loading && handleSend()}
                  placeholder="Tanya tentang SQL..."
                  className="flex-1 bg-slate-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-200"
                />

                <motion.button
                  onClick={handleSend}
                  disabled={loading || (!input.trim() && !image)}
                  className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-300 disabled:to-slate-400 transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}