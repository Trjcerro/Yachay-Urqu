// Dependencias
import React, { useRef } from "react";

// Componentes
import Header from "../components/Header";
import NewsComponent from "../components/News";

// Estilos
import "../styles/pages/app.scss";

// Variables
import generalData from "../_data/_general.json";

function Home() {
  const imicioRef = useRef(null);
  const noticiasRef = useRef(null);
  const recursosRef = useRef(null);

  return (
    <div className="App">
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

      {/* Sección carrusel de noticias */}
      <section className="noticias">
        <h2>Noticias</h2>
        <span>Encuentra las noticias mas recientes sobre Cerro Seco.</span>
        <NewsComponent />
      </section>

      <section className="game">
        <h2>¡Juega y aprende con nuestro videojuego educativo sobre bioindicadores!</h2>

        <p>
          ¿Quieres poner a prueba tus conocimientos mientras te diviertes? Te invitamos a jugar nuestro videojuego
          educativo y conocer más sobre los bioindicadores y su importancia en el medio ambiente. Con este juego
          interactivo, podrás aprender de una manera amena y dinámica sobre los diferentes tipos de bioindicadores, su
          uso y aplicación en la evaluación ambiental. ¡No pierdas esta oportunidad de aprender jugando!
        </p>

         <iframe
          src="https://games.gdevelop-app.com/game-3dbcc286-1d8a-47e7-afc7-54714805c5ae/index.html?userSlug=cerroseco2023&amp;gameSlug=video-juego-"
          allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; keyboard-map *; focus-without-user-activation *; screen-wake-lock; clipboard-read; clipboard-write"
          scrolling="no"
        ></iframe>
      </section>

      <section className="recursos"></section>

      {/* <iframe
        src="https://games.gdevelop-app.com/game-3dbcc286-1d8a-47e7-afc7-54714805c5ae/index.html?userSlug=cerroseco2023&amp;gameSlug=video-juego-"
        allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; keyboard-map *; focus-without-user-activation *; screen-wake-lock; clipboard-read; clipboard-write"
        scrolling="no"
        
      ></iframe> */}
    </div>
  );
}

export default Home;
