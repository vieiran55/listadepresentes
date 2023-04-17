import Home  from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lista from "./pages/Lista";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </Router>
  );
}
