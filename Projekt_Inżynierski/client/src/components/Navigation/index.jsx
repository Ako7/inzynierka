import styles from "./styles.module.css"
import React from "react";
import Logout from "../Logout";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className={styles.pinkNavbar} bg="pink" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">Ctering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/menu" className="text-white">Menu</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="text-white">Koszyk</Nav.Link>
            <Nav.Link as={Link} to="/calc" className="text-white">Kalkulator BMR</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">O nas</Nav.Link>
          </Nav>
          <Nav>
            <Logout />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
