import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from  "./components/Portfolio"
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <div id="Home">
        <Home/>
        </div>
        <div id="About">
        <About />
        </div>
        <div id="Skill">
        <Skill />
        </div>
        <div id="Portfolio">
        <Portfolio/>
        </div>
        <div id="Contact">
        <Contact/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
