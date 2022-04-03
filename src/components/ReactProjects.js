import React from "react";
import image from "../images/macbookAirPic.jpeg";

function ReactProjects() {
  return (
    <div>
      <div>
        <img src={image} alt="macbook" className="background" loading="lazy" />
        <div className="relative flex justify-center">
          <h3 className="projects-banner">Bootcamp Projects!</h3>
        </div>
        <section className="relative flex justify-center">
          <div className="projects-container">
            <div className="project">
              <a href="https://1travelintexan.github.io/Rippin-Brah-/">
                <h3>Rippin Brah!</h3>
              </a>
              <h5 className="slogan">
                Surfing game that is fun and addictive w/ 80's arcade theme.
              </h5>
            </div>
            <div className="project">
              <a href="https://lifes-a-beach.herokuapp.com/">
                <h3>Life's a Beach</h3>
              </a>
              <h5 className="slogan">
                Team effort App, designed to help clients budget for their
                dream. vacation
              </h5>
            </div>
            <div className="project relative">
              <a href="https://kook-club.herokuapp.com/">
                <h3>Kook Club</h3>
              </a>
              <h5 className="slogan">
                Designed for surfers to create social events.
              </h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ReactProjects;
