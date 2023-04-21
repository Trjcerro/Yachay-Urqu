// Dependencias
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

const ModalBio = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby={props.id} centered>
      <Modal.Header closeButton>
        {/* TITULO DEL MODAL */}
        <Modal.Title id={props.id}>{props.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* IMAGEN */}
        {props.img.length > 25 ? (
          <figure id="hexagono" style={{ backgroundImage: `url(${props.img})` }}></figure>
        ) : (
          false
        )}

        {/* UBICACIÓN */}
        {props.location && props.localidad ? (
          <span>
            Ubicación: {props.location} - {props.localidad}
          </span>
        ) : (
          false
        )}

        {/* DESCRIPCIÓN */}
        {props.description ? <p>{props.description}</p> : false}

        {/* TABLA */}
        <Table striped bordered hover size="sm">
          <tbody>
            {props.coordenadas ? (
              <tr>
                <td>Coordenadas</td>
                <td>{props.coordenadas}</td>
              </tr>
            ) : (
              false
            )}

            {props.latitud ? (
              <tr>
                <td>Latitud</td>
                <td>{props.latitud}</td>
              </tr>
            ) : (
              false
            )}

            {props.longitud ? (
              <tr>
                <td>Longitud</td>
                <td>{props.longitud}</td>
              </tr>
            ) : (
              false
            )}

            {props.elevacion ? (
              <tr>
                <td>Elevación</td>
                <td>{props.elevacion}</td>
              </tr>
            ) : (
              false
            )}
          </tbody>
        </Table>

        <h3>Habitat</h3>

        <p>{props.habitat}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBio;
