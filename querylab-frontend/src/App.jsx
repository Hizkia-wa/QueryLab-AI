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
      <div className="d-flex flex-column min-vh-100">

        {/* Navbar global */}
        <Navbar />

        {/* Konten berubah sesuai route */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modul" element={<ModulPage />} />
            <Route path="/materi" element={<MateriListPage />} />
            <Route path="/modul/:id" element={<PraktikumPage />} />
            <Route path="/materi/:id" element={<MateriPage />} />
          </Routes>
        </div>

        {/* Footer global */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;