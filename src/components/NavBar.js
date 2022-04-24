import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="nav-bar"
      >
        <Container>
          <Nav.Link as={Link} to="/" id="cursive">
            {" "}
            Joshua George
          </Nav.Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" id="neon">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/projects" id="neon">
                Projects
              </Nav.Link>

              <Nav.Link as={Link} to="/about" id="neon">
                About Me
              </Nav.Link>

              <Nav.Link as={Link} to="/contact" id="neon">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavBar;
