// Dependencias
import React, { useRef } from "react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsComponent from "../components/News";

// Estilos
import "../styles/pages/app.scss";

// Variables
import generalData from "../_data/_general.json";

const Recursos = () => {
  return (
    <>
      {/*  Barra de navegación */}
      <Header />

      {/* Sección carrusel de noticias */}
      <section className="noticias">
        <h2>Noticias</h2>
        <span>Encuentra las noticias mas recientes sobre Cerro Seco.</span>
        <NewsComponent />
      </section>

      {/* Sección del footer */}
      <Footer />
    </>
  );
};

export default Recursos;
