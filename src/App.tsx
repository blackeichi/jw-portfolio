import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import "./font/font.css";
import { Proposal } from "./Proposal";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
