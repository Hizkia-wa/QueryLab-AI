import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      } px-10 flex justify-between items-center`}
    >
      <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        QueryLab
      </h1>

      <div className="hidden md:flex space-x-8 font-medium text-gray-700">
        <a href="#materi" className="hover:text-indigo-600">
          Materi
        </a>
        <a href="#quiz" className="hover:text-indigo-600">
          Quiz
        </a>
        <a href="#premium" className="hover:text-indigo-600">
          Premium
        </a>
      </div>

      <div className="space-x-4">
        <button className="px-4 py-2 border rounded-xl hover:bg-gray-100">
          Login
        </button>
        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 transition">
          Daftar
        </button>
      </div>
    </nav>
  );
}