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
          className="background about-background"
          loading="lazy"
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
              <h5 className="slogan">My first 3 Projects</h5>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/TSprojects">
                <h3>-Typescript Projects</h3>
              </Link>
              <h5 className="slogan">Typescript practice projects</h5>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/vanillaJS">
                <h3>-Practice HTML</h3>
              </Link>
              <h5 className="slogan">Vanilla Javascript fun projects</h5>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/freelance">
                <h3>-Freelance Apps</h3>
              </Link>
              <h5 className="slogan">Small businesses webpages</h5>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Projects;
