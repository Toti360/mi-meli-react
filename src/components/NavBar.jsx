import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <>
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <a href="*">
          <img src={logo} alt="Logo Mi Meli" height={40} />
        </a>
        <Navbar.Brand href="/">MI MELI</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/Granel" as={NavLink}>
            GRANEL
          </Nav.Link>
          <Nav.Link to="/category/Envasado" as={NavLink}>
            ENVASADO
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  </>
);
