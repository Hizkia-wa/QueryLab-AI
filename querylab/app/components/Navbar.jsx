"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Cpu, BookOpen, Code2, Trophy, BrainCircuit } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav className={`nav-base ${scrolled ? "nav-scrolled" : "nav-top"}`}>
      <div className="container-center w-full px-6 flex justify-between items-center">
        
        {/* LOGO - QueryLab */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <h1 className="text-2xl font-black tracking-tighter leading-none text-slate-900">
              Query<span className="text-indigo-600">Lab</span>
            </h1>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Intelligence</span>
          </div>
        </Link>

        {/* MAIN NAVIGATION */}
        <div className="hidden md:flex items-center bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50 backdrop-blur-sm">
          <NavLink to="/materi" active={pathname?.startsWith("/materi")}> 
            <BookOpen size={16} /> Materi
          </NavLink>
          <NavLink to="/modul" active={pathname === "/modul"}>
            <Code2 size={16} /> Praktikum
          </NavLink>
          <NavLink to="/challenge" active={pathname === "/challenge"}>
            <Trophy size={16} /> Challenge
          </NavLink>
          <NavLink to="/chat" active={pathname === "/chat"}>
            <BrainCircuit size={16} /> AI Mentor
          </NavLink>
          <NavLink to="/solusi" active={pathname === "/solusi"}>
            <Cpu size={16} /> Solusi
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-700 bg-slate-100 rounded-xl">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible -translate-y-2"
      }`}>
        <div className="p-6 flex flex-col gap-3">
          <MobileNavLink to="/materi" label="Materi" icon={<BookOpen size={20}/>} />
          <MobileNavLink to="/modul" label="Praktikum" icon={<Code2 size={20}/>} />
          <MobileNavLink to="/challenge" label="Challenge" icon={<Trophy size={20}/>} />
          <MobileNavLink to="/chat" label="AI Mentor" icon={<BrainCircuit size={20}/>} />
          <MobileNavLink to="/solusi" label="Solusi" icon={<Cpu size={20}/>} />
        </div>
      </div>
    </nav>
  );
}

// Helper Components
function NavLink({ to, children, active }) {
  return (
    <Link 
      href={to} 
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
        active 
          ? "bg-white text-indigo-600 shadow-sm" 
          : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, label, icon }) {
  return (
    <Link href={to} className="flex items-center gap-3 p-4 text-slate-700 font-bold hover:bg-slate-50 rounded-2xl transition-all">
      {icon} {label}
    </Link>
  );
}