// Dependencias
import React, { useState } from "react";

// Componentes
import Header from "../components/Header";
import NewsComponent from "../components/News";

// Estilos
import "../styles/pages/app.scss";

// Variables
import generalData from "../_data/_general.json";


function Home() {
  return (
    <div className="App">
      {/*  Barra de navegación */}
      <Header />

      {/* Sección de presentación inicial */}
      <section className="initial">
        <h1>{generalData.home.titleMain}</h1>
        <span>{generalData.home.textIntroductMain}</span>
      </section>

      {/* Sección carrusel de noticias */}
      <NewsComponent />
    </div>
  );
}

export default Home;
