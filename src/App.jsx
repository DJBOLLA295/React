import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import NotFound from "../pages/NotFound";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <>
    <Title>Meditazione</Title>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} /> {/* Route per le pagine non trovate */}
      </Routes>
    </Router>
    </>
  );
}
export default App;