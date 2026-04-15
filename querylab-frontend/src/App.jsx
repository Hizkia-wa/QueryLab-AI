import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import ModulPage from "./pages/ModulPage";
import MateriListPage from "./pages/MateriListPage";
import MateriPage from "./pages/MateriPage";
import PraktikumPage from "./pages/PraktikumPage";
import ChallengePage from "./pages/ChallengePage";
import SolutionPage from "./pages/SolutionPage";
import QuizPage from "./pages/QuizPage"; // 

// AI Component
import QueryLabAI from "./components/QueryLabAI";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f8fafc]">

        <Navbar />

        <main className="flex-grow pt-24 lg:pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/praktikum" element={<ModulPage />} />
            <Route path="/materi" element={<MateriListPage />} />
            <Route path="/materi/:id" element={<MateriPage />} />

            <Route path="/praktikum/:id" element={<PraktikumPage />} />
            <Route path="/quiz/:id" element={<QuizPage />} />

            <Route path="/challenge" element={<ChallengePage />} />
            <Route path="/solusi" element={<SolutionPage />} />
          </Routes>
        </main>

        <QueryLabAI />

        <Footer />
      </div>
    </Router>
  );
}

export default App;