import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
