import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import { useMediaQuery } from '@material-ui/core';

function Navigation() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Lisa Lorenz</Navbar.Brand>
      {isMobile ? (
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      ) : null}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
