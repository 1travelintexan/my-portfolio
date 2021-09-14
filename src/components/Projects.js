import React, { Component } from "react";
import image from "../images/mac-keyboard.jpeg";

class Projects extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="keyboard picture"
          className="absolute object-cover w-full h-full"
        />
        <div className="relative flex justify-center">
          <h3 className="projects-banner">Some of my handy work:</h3>
        </div>
        <section className="relative flex justify-center">
          <div className="projects-container">
            <div className="project">
              <a href="https://lifes-a-beach.herokuapp.com/">
                <h3>Life's a Beach</h3>
              </a>
              <p>
                Joint effort APP with a partner, it is designed to help clients
                budget for their dream vacation. Full MERN developed APP with
                bootstrap styling. Enter your details and try it out!
              </p>
            </div>
            <div className="project">
              <a href="https://kook-club.herokuapp.com/">
                <h3>Kook Club</h3>
              </a>
              <p>
                Fun APP that is designed for surfers to create events to meet up
                and surf with friends. The goal is to increase socialization
                between surfers and improve surf safety for new surfers. Styled
                with bootstrap, created with React, Node, and Express. Deployed
                through Heroku
              </p>
            </div>
            <div className="project">
              <a href="https://1travelintexan.github.io/Rippin-Brah-/">
                <h3>Rippin Brah!</h3>
              </a>
              <p>
                8-bit surfing game that is fun and addictive. One of my first
                projects, and one that always brings a smile to my face, created
                with canvas.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Projects;
