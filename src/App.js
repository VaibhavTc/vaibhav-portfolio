import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./component/Header";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Controls from "./component/Controls";
import ThemeButton from "./component/ThemeButton";

const App = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Controls />

      {/* <Routes>
        </Routes> */}
      {/* </Router> */}
      {/* <Controls /> */}
    </div>
  );
};

export default App;
