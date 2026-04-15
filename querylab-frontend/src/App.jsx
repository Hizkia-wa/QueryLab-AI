import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import ModulPage from "./pages/ModulPage";
import MateriListPage from "./pages/MateriListPage";
import MateriPage from "./pages/MateriPage";
import PraktikumPage from "./pages/PraktikumPage";
import ChallengePage from "./pages/ChallengePage";
import SolutionPage from "./pages/SolutionPage";
import QuizPage from "./pages/QuizPage";
import AiPage from "./components/QueryLabFull" // 

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
            <Route path="/ai-mentor" element={<AiPage />} />
            <Route path="/praktikum/:id" element={<PraktikumPage />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/challenge" element={<ChallengePage />} />
            <Route path="/solusi" element={<SolutionPage />} />
          </Routes>
        </main>

        <QueryLabAI />
        <footer className="py-6 border-t bg-white mt-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between align-middle items-center gap-4">
              <p className="text-gray-500 text-sm mb-0">
                &copy; {new Date().getFullYear()} <span className="font-bold text-blue-600">SQL</span>Lab AI. 
                Created by <span className="font-semibold text-gray-800">Q-Lab Squad</span>
              </p>
              <div className="flex gap-4">
                <span className="text-gray-400 text-xs italic">
                  "Mastering Data, One Query at a Time."
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;