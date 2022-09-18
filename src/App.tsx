import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./font/font.css";
import { Home } from "./Router/Home";
import { Profile } from "./Router/Profile";
import { Proposal } from "./Router/Proposal";
import { Me } from "./Router/Me";
import { Stack } from "./Router/Stack";
import { Certification } from "./Router/Certification";
import { Project } from "./Router/Project";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/me" element={<Me />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/certify" element={<Certification />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
