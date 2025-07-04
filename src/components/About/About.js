import React from "react";
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <div className="container">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <Intro />
        <Skills />
        <Footer />
      </div>
      
    </>
  );
}
