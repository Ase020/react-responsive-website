import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import { CallToAction, Brand, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
