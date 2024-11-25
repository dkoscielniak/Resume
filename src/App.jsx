import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import PortfolioDisplay from "./pages/portfolioDisplay";
import { Profiler } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/portfolio/:id" element={<PortfolioDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
