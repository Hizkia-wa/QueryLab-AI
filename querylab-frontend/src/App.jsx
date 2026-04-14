import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ModulPage from "./pages/ModulPage";
import MateriListPage from "./pages/MateriListPage";
import MateriPage from "./pages/MateriPage";
import PraktikumPage from "./pages/PraktikumPage";

function App() {
  return (
    <Router>
      {/* Gunakan class Tailwind: flex flex-col min-h-screen */}
      <div className="flex flex-col min-h-screen bg-[#f8fafc]">

        {/* Navbar tetap di sini */}
        <Navbar />

        {/* Diberi pt-24 (Padding Top) supaya konten turun 
            dan tidak ketimpa Navbar yang tingginya sekitar 80px-90px.
        */}
        <main className="flex-grow pt-24 lg:pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modul" element={<ModulPage />} />
            <Route path="/materi" element={<MateriListPage />} />
            <Route path="/modul/:id" element={<PraktikumPage />} />
            <Route path="/materi/:id" element={<MateriPage />} />
          </Routes>
        </main>

        {/* Footer akan selalu di bawah karena ada flex-grow di atas */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;