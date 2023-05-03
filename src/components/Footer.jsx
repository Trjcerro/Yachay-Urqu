import React from "react";

// Styles
import "../styles/components/footer.scss";

// Variables
import rutaLogo from "../assets/iconos/logo-small.svg";
import generalData from "../_data/_general.json";

const Footer = () => {
  return (
    <footer>
      <section className="footer_initial">
        <div className="footer_initial_social">
          <figure className="footer_initial_social_item">
            <a href="https://www.facebook.com/UniversidadPedagogicaNacional" target="_blank" rel="noreferrer">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </figure>

          <figure className="footer_initial_social_item">
            <a href="https://twitter.com/comunidadUPN" target="_blank" rel="noreferrer">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </figure>

          <figure className="footer_initial_social_item">
            <a href="https://www.instagram.com/upedagogicanacional/" target="_blank" rel="noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </figure>

          <figure className="footer_initial_social_item">
            <a href="https://www.youtube.com/user/redacademica" target="_blank" rel="noreferrer">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </figure>
        </div>

        <a href="https://www.upn.edu.co/" className="footer_initial_contact">
          <h1 className="footer_initial_contact_h1">Contactenos</h1>
        </a>

        <div className="footer_initial_text">
          <h1 className="footer_initial_text_h1">
            Página desarrollada por el
            <a href="http://cinndet.upn.edu.co/" target="_blank" rel="noreferrer">
              CINNDET
            </a>
          </h1>
        </div>
      </section>

      <section className="footer_main">
        <article className="footer_main_article-logo">
          <h1 className="footer_main_title">{generalData.titlePage}</h1>

          <h2 className="footer_main_caption">Universidad Pedagógica Nacional</h2>

          <figure className="footer_main_logo">
            <img className="footer_main_logoSmall" src={rutaLogo} alt="Logo del footer" />
          </figure>
        </article>

        <article className="footer_main_article-info">
          <ul className="footer_main_list">
            <li className="footer_main_list_item">
              <a
                href="http://gobiernodigital.pedagogica.edu.co/wp-content/uploads/2018/04/manual_politica_tratamiento_datos_personales_upn.pdf"
                target="_blank"
              >
                Privacidad y tratamiento de datos
              </a>
            </li>

            <li className="footer_main_list_item">
              <a
                href="https://www.upn.edu.co/politica-de-derechos-de-autor-y-o-autorizacion-de-uso-sobre-los-contenidos"
                target="_blank"
              >
                Derechos de Autor
              </a>
            </li>

            <li className="footer_main_list_item">
              <a href="https://www.upn.edu.co/terminos-y-condiciones/" target="_blank">
                Términos y condiciones
              </a>
            </li>

            <li className="footer_main_list_item">
              <a href="https://upedagogicanacional.isolucion.co/Homes/HomeConsulta.aspx" target="_blank">
                Sistema de Gestión Integral
              </a>
            </li>
          </ul>
        </article>
      </section>

      <section className="footer_derechos">
        <p>VERSIÓN 1.0 COPYRIGHT © 2023 UNIVERIDAD PEDAGÓGICA NACIONAL TODOS LOS DERECHOS RESERVADOS</p>
      </section>
    </footer>
  );
};

export default Footer;
