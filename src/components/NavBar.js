import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

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
              <NavLink
                as={Link}
                to="/"
                id="neon"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>

              <NavLink
                as={Link}
                to="/projects"
                id="neon"
                activeClassName="active"
              >
                Projects
              </NavLink>

              <NavLink as={Link} to="/about" id="neon" activeClassName="active">
                About Me
              </NavLink>

              <NavLink
                as={Link}
                to="/contact"
                id="neon"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavBar;
