// Dependencias
import React from "react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";

// Estilos
import "../styles/pages/app.scss";
import "../styles/pages/home.scss";

// Variables
import generalData from "../_data/_general.json";
import imgProblem from "../assets/iconos/nature.svg";

function Home() {
  return (
    <>
      {/*  Barra de navegación */}
      <Header />

      <main className="main_content">
        {/* Sección de presentación inicial */}
        <section className="initial">
          <h1>{generalData.home.titleMain}</h1>
          <span>{generalData.home.textIntroductMain}</span>
        </section>

        {/* Sección para la información general del lugar */}
        <section className="information">
          <figure>
            <ion-icon name="location-outline"></ion-icon>
            <figcaption>{generalData.home.items[0]}</figcaption>
          </figure>

          <figure>
            <ion-icon name="leaf-outline"></ion-icon>
            <figcaption>{generalData.home.items[1]}</figcaption>
          </figure>

          <figure>
            <ion-icon name="man-outline"></ion-icon>
            <figcaption>{generalData.home.items[2]}</figcaption>
          </figure>
        </section>

        <section className="problem">
          <figure>
            <img src={imgProblem} alt="" />
          </figure>
          <article>
            <h3>{generalData.home.titleProblem}</h3>
            <p>{generalData.home.textProblem1}</p>
            <p>{generalData.home.textProblem2}</p>
          </article>
        </section>
      </main>

      {/* Sección del footer */}
      <Footer />
    </>
  );
}

export default Home;
