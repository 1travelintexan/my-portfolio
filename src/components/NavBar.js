import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import image from "../face.jpg";

class NavBar extends Component {
  render() {
    return (
      <header className="nav relative">
        <div className="relative container mx-auto flex justify-between ">
          <nav className="flex">
            <NavLink
              exact
              to="/"
              activeClassName="text-white"
              className="inflex-flex items-center py-6 px-3 mr-4 rounded text-blue-100 hover:bg-gray-900 text-4xl font-bold cursive tracking-widest"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="bg-gray-800"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:bg-gray-900"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="bg-gray-800"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:bg-gray-900"
            >
              About Me!
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="bg-gray-800"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:bg-gray-900"
            >
              Contact
            </NavLink>
          </nav>
          <div className="face">
            <img src={image} alt="mac picture" />
          </div>
        </div>
      </header>
    );
  }
}
export default NavBar;
