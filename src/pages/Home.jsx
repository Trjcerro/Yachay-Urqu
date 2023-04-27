// Dependencias
import React, { useRef } from "react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";

// Estilos
import "../styles/pages/app.scss";

// Variables
import generalData from "../_data/_general.json";

function Home() {
  const imicioRef = useRef(null);
  const noticiasRef = useRef(null);
  const recursosRef = useRef(null);

  return (
    <>
      {/*  Barra de navegación */}
      <Header />

      {/* Sección de presentación inicial */}
      <section className="initial">
        <h1>{generalData.home.titleMain}</h1>
        <span>{generalData.home.textIntroductMain}</span>
      </section>

      {/* Sección para la información general del lugar */}
      <section className="information">
        <figure>
          <ion-icon name="location-outline"></ion-icon>
          <figcaption>Item</figcaption>
        </figure>

        <figure>
          <ion-icon name="diamond-outline"></ion-icon>
          <figcaption>Item</figcaption>
        </figure>

        <figure>
          <ion-icon name="man-outline"></ion-icon>
          <figcaption>Item</figcaption>
        </figure>
      </section>

      <section className="recursos"></section>

      {/* Sección del footer */}
      <Footer />
    </>
  );
}

export default Home;
