export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white mt-24">
      <div className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">QueryLab</h3>
          <p className="text-sm opacity-80">
            Platform pembelajaran SQL interaktif untuk mahasiswa dan developer masa depan.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Materi</li>
            <li>Quiz</li>
            <li>Praktikum</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Akun</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Login</li>
            <li>Daftar</li>
            <li>Kontak</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 text-center py-6 text-sm opacity-80">
        © {new Date().getFullYear()} QueryLab. All rights reserved.
      </div>
    </footer>
  );
}