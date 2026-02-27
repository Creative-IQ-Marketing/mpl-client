import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingBubbles from "./components/home/FloatingBubbles";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import FirmOverview from "./pages/FirmOverview";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import StyleGuide from "./pages/StyleGuide";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <FloatingBubbles />
        <Header />
        <main className="flex-grow pt-20 relative z-10">
          {" "}
          {/* pt-20 to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<FirmOverview />} />
            <Route path="/firm-overview" element={<FirmOverview />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/style-guide" element={<StyleGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
