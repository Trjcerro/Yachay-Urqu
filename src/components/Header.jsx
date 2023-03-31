// Dependencias
import React from "react";
// Components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Estilos
import "../styles/components/header.scss";

// Variables
import generalData from "../_data/_general.json";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
      <Container>
        <Navbar.Brand href="#home">
          <a href="#">
            <span>{generalData.titlePage}</span>
          </a>
        </Navbar.Brand>
        <section>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#noticias">Noticias</Nav.Link>
              <Nav.Link href="#bioindicadores">Bioindicadores</Nav.Link>
              <Nav.Link href="#recursos">Recursos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </section>
      </Container>
    </Navbar>
  );
};

export default Header;
