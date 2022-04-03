import React, { Component } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
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

      // <header className="nav relative">
      //   <div className="relative container mx-auto flex justify-between ">
      //     <nav className="flex">
      //       <NavLink
      //         id="neon"
      //         exact
      //         to="/"
      //         activeClassName="text-white"
      //         className=" inflex-flex items-center justify-center rounded text-blue-100 text-3xl font-bold cursive tracking-widest md:text-6xl"
      //       >
      //         Home
      //       </NavLink>
      //       <NavLink
      //         id="neon"
      //         to="/projects"
      //         activeClassName="bg-gray-800"
      //         className="neon inline-flex items-center text-3xl py-1 px-3 my-6 rounded text-blue-100 hover:bg-gray-900"
      //       >
      //         Projects
      //       </NavLink>
      //       <NavLink
      //         id="neon"
      //         to="/about"
      //         activeClassName="bg-gray-800"
      //         className="inline-flex items-center text-3xl py-3 px-3 my-6 rounded text-blue-100 hover:bg-gray-900"
      //       >
      //         About Me
      //       </NavLink>
      //       <NavLink
      //         id="neon"
      //         to="/contact"
      //         activeClassName="bg-gray-800"
      //         className="neon inline-flex items-center text-3xl py-3 px-3 my-6 rounded text-blue-100 hover:bg-gray-900"
      //       >
      //         Contact
      //       </NavLink>
      //     </nav>
      //   </div>
      // </header>
    );
  }
}
export default NavBar;
