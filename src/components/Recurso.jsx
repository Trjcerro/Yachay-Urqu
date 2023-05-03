// Dependencias
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// Estilos
import "../styles/components/bioindicador.scss";

const Recurso = ({ name, description, type, multimedia }) => {
  return (
    <>
      <Card className="bioindicador">
        <Card.Body>
          <Card.Title>{name ? <h2>{name}</h2> : false}</Card.Title>
          <span>Ubicación: {type}</span>
          <Card.Text>{description ? <p>{description}</p> : false}</Card.Text>
          <a href={multimedia} target="_blank">
            Consulte aquí.
          </a>
        </Card.Body>
        <ListGroup className="list-group-flush"></ListGroup>
      </Card>
    </>
  );
};

export default Recurso;
