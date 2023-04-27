// Dependencias
import React from "react";
import { Link } from "react-router-dom";

// Components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Estilos
import "../styles/components/header.scss";

// Variables
import generalData from "../_data/_general.json";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header" id="inicio">
      <Container>
        <Navbar.Brand href="#">
          <span>{generalData.titlePage}</span>
        </Navbar.Brand>
        <section>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/Yachay-Urqu/">Inicio</Link>
              <Link to="/Yachay-Urqu/bioindicadores">Bioindicadores</Link>
              <Link to="/Yachay-Urqu/juguemos">juguemos</Link>
              <Link to="/Yachay-Urqu/recursos">Recursos</Link>
            </Nav>
            <Nav>
              <Link to="/Yachay-Urqu/creditos">Creditos</Link>
            </Nav>
          </Navbar.Collapse>
        </section>
      </Container>
    </Navbar>
  );
};

export default Header;
