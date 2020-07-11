import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Myself from "./Components/Myself/Myself";
import About from "./Components/About/About";
import Skillset from "./Components/Skillset/Skillset";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Toggle from "./Components/Toggle/Toggle";

function App() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };
  return (
    <div className={theme ? "App dark" : "App light"}>
      <Toggle toggleTheme={toggleTheme} />
      <Navbar />
      <Myself />
      <About />
      <Skillset />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
