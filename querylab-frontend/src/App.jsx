import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PraktikumPage from "./pages/PraktikumPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/praktikum" element={<PraktikumPage />} />
      </Routes>
    </Router>
  );
}

export default App;