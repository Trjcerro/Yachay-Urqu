// Dependencias
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/Home";
import Bioindicadores from "../pages/Bioindicadores";
import Jugemos from "../pages/Jugemos";
import Recursos from "../pages/Recursos";
import Creditos from "../pages/Creditos";

// Estilos
import "../styles/pages/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Yachay-Urqu/" element={<Home />} />
        <Route path="/Yachay-Urqu/bioindicadores" element={<Bioindicadores />} />
        <Route path="/Yachay-Urqu/juguemos" element={<Jugemos />} />
        <Route path="/Yachay-Urqu/recursos" element={<Recursos />} />
        <Route path="/Yachay-Urqu/creditos" element={<Creditos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
