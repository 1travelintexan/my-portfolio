import React from "react";
import image from "../images/macbookAirPic.jpeg";

function ReactProjects() {
  return (
    <div>
      <div>
        <img
          src={image}
          alt="macbook"
          className="absolute object-cover w-full h-full"
          loading="lazy"
        />
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
                Surfing game that is as fun as it is addictive. One of my first
                projects, and one that always brings a smile to my face. I
                created it with canvas and using animation frame tools to
                simulate movement. Also has fun music, great sound effects and
                an 80's arcade theme.
              </h5>
            </div>
            <div className="project">
              <a href="https://lifes-a-beach.herokuapp.com/">
                <h3>Life's a Beach</h3>
              </a>
              <h5 className="slogan">
                Joint effort APP with my partner, it is designed to help clients
                budget for their dream vacation. Full MERN developed APP with
                bootstrap styling. Enter your details and try it out!
              </h5>
            </div>
            <div className="project relative">
              <a href="https://kook-club.herokuapp.com/">
                <h3>Kook Club</h3>
              </a>
              <h5 className="slogan">
                Fun APP that I designed for surfers to create events and meet up
                to surf with friends. The goal was to increase socialization
                between surfers and improve surf safety for new learning
                surfers. Styled with bootstrap, created with React, Node, and
                Express. Deployed through Heroku
              </h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ReactProjects;
