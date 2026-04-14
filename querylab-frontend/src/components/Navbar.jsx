import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-base ${scrolled ? "nav-scrolled" : "nav-top"}`}>
      <div className="container-center w-full px-6 flex justify-between items-center">
        
        {/* Logo - Berikan sedikit margin agar tidak terlalu mepet atas */}
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer py-1">
          QueryLab
        </h1>

        {/* Desktop Navigation & Buttons */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8 font-semibold text-slate-700">
            <a href="#materi" className="hover:text-indigo-600 transition-colors">Materi</a>
            <a href="#quiz" className="hover:text-indigo-600 transition-colors">Quiz</a>
            <a href="#premium" className="hover:text-indigo-600 transition-colors">Premium</a>
          </div>

          <div className="flex items-center space-x-3 border-l pl-8 border-slate-200">
            <button className="px-5 py-2 text-slate-600 font-bold hover:text-indigo-600 transition-all">
              Login
            </button>
            <button className="btn-gradient">
              Daftar
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 shadow-xl ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible -translate-y-2"
      }`}>
        <div className="flex flex-col p-6 space-y-4">
          <a href="#materi" className="font-bold text-slate-700">Materi</a>
          <a href="#quiz" className="font-bold text-slate-700">Quiz</a>
          <a href="#premium" className="font-bold text-slate-700">Premium</a>
          <hr />
          <div className="flex flex-col gap-3">
            <button className="btn-outline w-full justify-center">Login</button>
            <button className="btn-gradient w-full justify-center">Daftar</button>
          </div>
        </div>
      </div>
    </nav>
  );
}