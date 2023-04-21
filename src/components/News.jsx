// Dependencias
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// Estilos
import "../styles/components/news.scss";

// Variables
import noticias from "../_data/noticias.json";

// Componentes
const carruselItem = (key, titulo, imagen, description, vinculo) => {
  const img = new URL(`../assets/noticias/${imagen}`, import.meta.url).pathname;

  return (
    <Carousel.Item key={key}>
      <a href={vinculo} target="_black">
        <img className="d-block w-100" src={img} alt="First slide" />
      </a>
      <Carousel.Caption>
        <h3>{titulo}</h3>
        <p>{description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

// Mapeo de la información
const itemsNoticias = noticias.map((item, index) => {
  return item.banner.length > 2 ? carruselItem(index, item.title, item.banner, item.description, item.link) : false;
});

const NewsComponent = () => {
  // Estado para el carrusel
  const [index, setIndex] = useState(0);

  // Manejador del carrusel
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="news" id="noticias">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {itemsNoticias}
      </Carousel>
    </section>
  );
};

export default NewsComponent;
