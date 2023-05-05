import Home  from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lista from "./pages/Lista";
import { useState } from "react";
import Rodape from "./components/Rodape";
import CadastrarPresente from "./pages/CadastrarPresente";
import GerenciarLista from "./pages/GerenciarLista";
import { IOpcoes } from "./interfaces/IOpcoes";
import LoginPage from "./pages/Login";


export default function AppRouter() {
  const [open, setOpen] = useState(true);
  const [busca, setBusca] = useState("");
  const [repositorio, setRepositorio] = useState<IOpcoes[]>([]);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista open={open} setOpen={setOpen} busca={busca} setBusca={setBusca} repositorio={repositorio} setRepositorio={setRepositorio}/>} />
        <Route path="/cadastrar" element={<CadastrarPresente />} />
        <Route path="/gerenciar" element={<GerenciarLista repositorio={repositorio} setRepositorio={setRepositorio}/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Rodape />
    </Router>
  );
}
