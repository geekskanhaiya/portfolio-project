import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/SrollToTop/SrollToTop";
import AnimatedCursor from "react-animated-cursor";
import ProgressBar from "react-scroll-progress-bar";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") || "toggle-dark-mode"
  );
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: `${mode === "light-theme" ? "#444" : "white"}`,
          zIndex: 9999,
        }}
        outerStyle={{
          border: `3px solid ${mode === "light-theme" ? "#444" : "white"}`,
          zIndex: 9999,
        }}
      />
      <ProgressBar duration={"0.1"} height="4" />
      <Router>
        <ScrollToTop />
        <Navbar mode={mode} setMode={setMode} />
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <Routes>
          <Route exact path="/" element={<Home mode={mode} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Project />} />
          
          <Route exact path="/contact" element={<Contact mode={mode} />} />
          <Route exact path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;