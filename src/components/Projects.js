import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../images/mac-keyboard.jpeg";

class Projects extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="mac keyboard"
          className="absolute object-cover w-full h-full"
        />
        <div className="relative flex justify-center">
          <h3 className="projects-banner">Some of my handy work:</h3>
        </div>
        <section className="relative flex justify-center">
          <div className="projects-container">
            <div className="project">
              <Link className="project-link" to="/project/reactprojects">
                <h3>-Bootcamp Projects</h3>
              </Link>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/vanillaJS">
                <h3>-Fun projects for practice</h3>
              </Link>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/freelance">
                <h3>-Freelance Apps</h3>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Projects;
