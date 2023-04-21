// Dependencias
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/Home";
import Bioindicadores from "../pages/Bioindicadores";

// Estilos
import "../styles/pages/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bioindicadores" element={<Bioindicadores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
