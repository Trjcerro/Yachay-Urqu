// Dependencias
import React from "react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";

// Estilos
import "../styles/pages/app.scss";
import "../styles/pages/creditos.scss";

// Variables
import generalData from "../_data/_general.json";
import cinndet from "../assets/iconos/CINNDET_logo.svg";

const Creditos = () => {
  return (
    <>
      {/*  Barra de navegación */}
      <Header />

      <main className="main_content">
        {/* Sección de presentación inicial */}
        <section className="initial contacto">
          <h1>{generalData.contacto.titleMain}</h1>
          <span>{generalData.contacto.textIntroductMain}</span>
        </section>

        <section className="proyect">
          <h2>{generalData.contacto.nameProyect}</h2>

          <p>{generalData.contacto.descriptionProyect}</p>

          <ul>
            <li>
              <strong>Contenidos y desarrollo investigativo: </strong>
              <span>Cristian Camilo Gómez Lázaro</span>
            </li>

            <li>
              <strong>Asesor investigativo: </strong>
              <span>Diana Fabiola Moreno Sierra</span>
            </li>
          </ul>

          <a href={generalData.contacto.linkProyect} target="_blank">
            Visita el proyecto aquí.
          </a>
        </section>

        <section className="cinndet">
          <article>
            <h2>Cinndet</h2>
            <span>Universidad Pedagógica Nacional</span>
            <figure>
              <img src={cinndet} />
            </figure>
          </article>

          <article>
            <div>
              <h3></h3>
              <p>
                Este sitio web ha sido creado y desarrollado por el Centro de Desarrollo Educativo y Tecnológico
                (Cinndet) de la Universidad Pedagógica Nacional de Colombia. El Cinndet ha desarrollado este sitio web
                como un medio para apoyar la transmisión de conocimientos y saberes a través de las TICs, con el
                objetivo de contribuir y generar un impacto en la sociedad y la comunidad académica.
              </p>
              <p>Agradecemos a las siguientes personas que contribuyeron en el proyecto:</p>
              <ul>
                <li>
                  <strong>Desarrollador web: </strong>
                  <span>Jeisson Gavilán</span>
                  <a href="https://www.linkedin.com/in/jeisson-alexander/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <strong>Diseñador gráfico: </strong>
                  <span>Mateo Soler</span>
                  <a href="https://co.linkedin.com/in/johann-mateo-soler-l%C3%B3pez-645269b1">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <strong>Diseñadora instruccional: </strong>
                  <span>Adriana Castro</span>
                  <a href="https://www.linkedin.com/in/calimiller">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <strong>Administradora LMS: </strong>
                  <span>Diana Sánchez</span>
                  <a href="">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <strong>Gestor de contenidos: </strong>
                  <span>Jhonny Ortegon</span>
                  <a href="https://www.linkedin.com/in/jhonny-alexander-ortegon-moreno-1363657a/?originalSubdomain=co">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </main>

      {/* Sección del footer */}
      <Footer />
    </>
  );
};

export default Creditos;
