// Dependencias
import React from "react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";

// Estilos
import "../styles/pages/app.scss";

// Variables
import generalData from "../_data/_general.json";

const Creditos = () => {
  return (
    <>
      {/*  Barra de navegación */}
      <Header />

      {/* Sección de presentación inicial */}
      <section className="initial contacto">
        <h1>{generalData.contacto.titleMain}</h1>
        <span>{generalData.contacto.textIntroductMain}</span>
      </section>

      <section className="proyect">
        <h2>{generalData.contacto.nameProyect}</h2>

        <p>{generalData.contacto.descriptionProyect}</p>

        <a href={generalData.contacto.linkProyect} target="_blank">
          Visita el proyecto aquí.
        </a>
      </section>

      <section className="cinndet">
        <article>
          <h2>Cinndet</h2>
          <span>Universidad Pedagógica Nacional</span>
        </article>

        <article>
          <div>
            <h3></h3>
            <p>
              Este sitio web ha sido creado y desarrollado por el Centro de Desarrollo Educativo y Tecnológico (Cinndet)
              de la Universidad Pedagógica Nacional de Colombia. El Cinndet ha desarrollado este sitio web como un medio
              para apoyar la transmisión de conocimientos y saberes a través de las TICs, con el objetivo de contribuir
              y generar un impacto en la sociedad y la comunidad académica.
            </p>
            <p>Agradecemos a las siguientes personas que contribuyeron en el proyecto:</p>
            <ul>
              <li>
                <a href=""> </a>
              </li>
              <li>
                <a href=""> </a>
              </li>
            </ul>
          </div>

          <figure>
            <img src="" alt="" />
          </figure>
        </article>
      </section>

       {/* Sección del footer */}
       <Footer />
    </>
  );
};

export default Creditos;
