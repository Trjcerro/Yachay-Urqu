// Dependencias
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// Componentes
import ModalBio from "./ModalBio";

// Estilos
import "../styles/components/bioindicador.scss";

const Bioindicador = ({
  name,
  img,
  description,
  location,
  departamento,
  municipio,
  localidad,
  coordenadas,
  latitud,
  longitud,
  elevación,
  habitat,
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className="bioindicador" variant="primary" onClick={() => setModalShow(true)}>
        <Card>
          {img.length > 20 ? (
            <figure>
              <img src={img} />
            </figure>
          ) : (
            false
          )}

          <Card.Body>
            <Card.Title>{name ? <h2>{name}</h2> : false}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {location ? (
              <ListGroup.Item>
                Pais: <span>{location}</span>
              </ListGroup.Item>
            ) : (
              false
            )}
            {latitud ? (
              <ListGroup.Item>
                Latitud: <span>{latitud}</span>
              </ListGroup.Item>
            ) : (
              false
            )}
            {longitud ? (
              <ListGroup.Item>
                Longitud: <span>{longitud}</span>
              </ListGroup.Item>
            ) : (
              false
            )}
          </ListGroup>
        </Card>
      </Button>

      <ModalBio
        id={`id${img}`}
        name={name}
        img={img}
        description={description}
        location={location}
        departamento={departamento}
        municipio={municipio}
        localidad={localidad}
        coordenadas={coordenadas}
        latitud={latitud}
        longitud={longitud}
        elevacion={elevación}
        habitat={habitat}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Bioindicador;
