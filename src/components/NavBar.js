import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/" id="cursive">
            {" "}
            Joshua George
          </NavLink>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="/" id="neon">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/projects" id="neon">
                  Projects
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about" id="neon">
                  About Me
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contact" id="neon">
                  Contact
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavBar;
