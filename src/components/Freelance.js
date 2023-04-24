import React from "react";
import image from "../images/macbookAirPic.jpeg";

function Freelance() {
  return (
    <div className="background2">
      <div>
        <div className="relative flex justify-center">
          <h3 className="projects-banner">SSR Sites</h3>
        </div>
        <section className="relative flex justify-center">
          <div className="projects-container">
            <div className="project">
              <a href="https://josh-ify.adaptable.app">
                <h3>Spotify Song Finder</h3>
              </a>
              <h5 className="slogan">
                Uses Spotify's free API to search albums & songs of artist.
                Created with HBS as a view engine, deployed with Cyclic and
                MongoDB Atlas.
              </h5>
            </div>
            <div className="project">
              <a href="https://lifes-a-beach.herokuapp.com/">
                <h3>Life's a Beach</h3>
              </a>
              <h5 className="slogan">
                Collaborative App with my partner, designed to help clients
                budget and save for their dream vacation.
              </h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Freelance;
