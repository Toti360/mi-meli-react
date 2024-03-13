import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/logo.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <>
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <a href="#">
          <img src={logo} alt="Logo Mi Meli" height={40} />
        </a>
        <Navbar.Brand href="#">Mi MeLi</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Nosotros</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  </>
);
