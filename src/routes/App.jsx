// Dependencias
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/Home";
import Bioindicadores from "../pages/Bioindicadores";
import Contacto from "../pages/Contacto";

// Estilos
import "../styles/pages/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Bioindicadores" element={<Bioindicadores />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
