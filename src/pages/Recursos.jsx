// Dependencias
import React from "react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsComponent from "../components/News";
import Recurso from "../components/Recurso.jsx";

// Estilos
import "../styles/pages/app.scss";
import "../styles/pages/recursos.scss";
import "../styles/pages/bioindicadores.scss";

// Variables
import recursos from "../_data/recursos.json";

const Recursos = () => {
  const componentBioindicador = recursos.map((item, index) => {
    return (
      <Recurso
        key={index}
        name={item.name}
        description={item.description}
        type={item.type}
        multimedia={item.multimedia}
      />
    );
  });

  return (
    <>
      {/*  Barra de navegación */}
      <Header />

      <main className="main_content">
        {/* Sección carrusel de noticias */}
        <section className="noticias">
          <h2>Noticias</h2>
          <span>Encuentra las noticias mas recientes sobre Cerro Seco.</span>
          <NewsComponent />
        </section>

        {/* Sección de recursos */}
        <section className="bioindicadores recursos">{componentBioindicador}</section>
      </main>

      {/* Sección del footer */}
      <Footer />
    </>
  );
};

export default Recursos;
