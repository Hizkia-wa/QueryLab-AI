import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  return (
    // 'w-full' memastikan elemen ini selebar layar browser
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;