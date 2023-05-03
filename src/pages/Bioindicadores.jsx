// Dependencias
import React, { useState } from "react";

// Componentes
import Header from "../components/Header";
import Bioindicador from "../components/Bioindicador";
import Footer from "../components/Footer";

// Estilos
import "../styles/pages/app.scss";
import "../styles/pages/bioindicadores.scss";

// Variables
import generalData from "../_data/_general.json";
import bioindicadores from "../_data/bioindicadores.json";

const Bioindicadores = () => {
  // Lista de bioindicadores
  const [bio, setbio] = useState(bioindicadores);

  // Lista de nombres de los bioindicadores
  const listNames = bioindicadores.map((item, index) => {
    return <option key={index} value={item.name} />;
  });

  const componentBioindicador = bio.map((item, index) => {
    const img = new URL(`../assets/bioindicadores/${item.img}`, import.meta.url).pathname;

    return (
      <Bioindicador
        key={index}
        name={item.name}
        img={img}
        description={item.description}
        location={item.location}
        departamento={item.departamento}
        municipio={item.municipio}
        localidad={item.localidad}
        coordenadas={item.coordenadas}
        latitud={item.latitud}
        longitud={item.longitud}
        elevación={item.elevación}
        habitat={item.habitat}
      />
    );
  });

  // Función para los filtros
  const filtrer = (event) => {
    event.preventDefault();

    let data = bioindicadores.find((item) => item.name === event.target.bioindicador.value);

    setbio([data]);
    event.target.bioindicador.value = "";
  };

  // Función para mostrar todos los bioindicadores
  const showAll = () => {
    setbio(bioindicadores);
  };

  return (
    <>
      {/*  Barra de navegación */}
      <Header />

      <main className="main_content">
        {/* Sección de presentación inicial */}
        <section className="initial bio">
          <h1 className="bio_title">{generalData.bioindicadores.titleMain}</h1>
          <span className="bio_title">{generalData.bioindicadores.textIntroductMain}</span>

          <form className="buscador" onSubmit={filtrer}>
            <label>
              <input name="bioindicador" list="bioindicadores" placeholder="Busca por el nombre" required />
              <datalist id="bioindicadores">{listNames}</datalist>
              <button type="submit">Buscar</button>
            </label>

            <button type="button" onClick={showAll}>
              Mostrar todos
            </button>
          </form>
        </section>

        {/* Sección de bioindicadores */}

        <section className="bioindicadores">{componentBioindicador}</section>
      </main>

      {/* Sección del footer */}
      <Footer />
    </>
  );
};

export default Bioindicadores;
