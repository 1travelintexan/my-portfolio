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
              <h5 className="slogan">
                My very first 3 Projects that I completed during my Full-Stack
                boot camp with Ironhack.
              </h5>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/TSprojects">
                <h3>-Typescript Projects</h3>
              </Link>
              <h5 className="slogan">
                Some Typescript practice projects to get more familiar with the
                syntax.
              </h5>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/vanillaJS">
                <h3>-Practice HTML</h3>
              </Link>
              <h5 className="slogan">
                Some fun projects I did with vanilla Javascript (games and cool
                retro ideas).
              </h5>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/freelance">
                <h3>-Freelance Apps</h3>
              </Link>
              <h5 className="slogan">
                Webpages that I completed for random small businesses.{" "}
              </h5>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Projects;
