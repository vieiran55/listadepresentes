import Home  from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lista from "./pages/Lista";
import { useState } from "react";
import Rodape from "./components/Rodape";
import GerenciarLista from "./pages/GerenciarLista";
import { IOpcoes } from "./interfaces/IOpcoes";
import LoginPage from "./pages/Login";
import Presenca from "./pages/Presenca";
import GerecniarPresencas from "./pages/GerenciarPresencas";


export default function AppRouter() {
  const [open, setOpen] = useState(true);
  const [busca, setBusca] = useState("");
  const [repositorio, setRepositorio] = useState<IOpcoes[]>([]);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista open={open} setOpen={setOpen} busca={busca} setBusca={setBusca} repositorio={repositorio} setRepositorio={setRepositorio}/>} />
        <Route path="/presenca" element={<Presenca /> } />
        <Route path="/gerenciar" element={<GerenciarLista repositorio={repositorio} setRepositorio={setRepositorio}/>} />
        <Route path="/gerenciarpresencas" element={<GerecniarPresencas/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Rodape />
    </Router>
  );
}
