import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import UploadResume from "./components/UploadResume";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import { useState, useEffect } from "react";
import About from "./components/About";

function App() {
  

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/upload" element={<UploadResume />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer/>
      </Router>
    </>
  );
}

export default App;
