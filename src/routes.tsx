import Home  from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lista from "./pages/Lista";
import { useEffect, useState } from "react";
import React from "react";
import Rodape from "./components/Rodape";


export default function AppRouter() {
  const [open, setOpen] = useState(true);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista open={open} setOpen={setOpen}/>} />
      </Routes>
      <Rodape />
    </Router>
  );
}
