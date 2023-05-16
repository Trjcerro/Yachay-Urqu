// Dependencias
import React from "react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";

// Estilos
import "../styles/pages/app.scss";
import "../styles/pages/jugemos.scss";

// Variables
import generalData from "../_data/_general.json";

const Jugemos = () => {
  return (
    <>
      {/*  Barra de navegación */}
      <Header />

      <main className="main_content">
        <section className="game">
          <h2>¡Juega y aprende con nuestro videojuego educativo sobre bioindicadores!</h2>

          <p>
            ¿Quieres poner a prueba tus conocimientos mientras te diviertes? Te invitamos a jugar nuestro videojuego
            educativo y conocer más sobre los bioindicadores y su importancia en el medio ambiente. Con este juego
            interactivo, podrás aprender de una manera amena y dinámica sobre los diferentes tipos de bioindicadores, su
            uso y aplicación en la evaluación ambiental. ¡No pierdas esta oportunidad de aprender jugando!
          </p>

          <iframe
            src="https://games.gdevelop-app.com/game-3c273626-5984-43dd-9000-cd50e1b4d771/index.html?userSlug=cerroseco2023&amp;gameSlug=video-juego-"
            allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; keyboard-map *; focus-without-user-activation *; screen-wake-lock; clipboard-read; clipboard-write"
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-same-origin allow-popups-to-escape-sandbox allow-downloads"
            scrolling="no"
          ></iframe>
        </section>
      </main>

      {/* Sección del footer */}
      <Footer />
    </>
  );
};

export default Jugemos;
