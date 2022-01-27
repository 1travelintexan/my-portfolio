import React from "react";
import image from "../images/macbookAirPic.jpeg";

function ReactProjects() {
  return (
    <div>
      <img
        src={image}
        alt="macbook"
        className="absolute object-cover w-full h-full"
      />
      <div className="relative project">
        <a href="https://1travelintexan.github.io/Rippin-Brah-/">
          <h3>Rippin Brah!</h3>
        </a>
        <p>
          Surfing game that is fun and addictive. One of my first projects, and
          one that always brings a smile to my face, created with canvas and
          using animation frame tools to simulate movement. Also has fun music
          and great sound effects.
        </p>
      </div>
      <div className="project relative">
        <a href="https://lifes-a-beach.herokuapp.com/">
          <h3>Life's a Beach</h3>
        </a>
        <p>
          Joint effort APP with my partner, it is designed to help clients
          budget for their dream vacation. Full MERN developed APP with
          bootstrap styling. Enter your details and try it out!
        </p>
      </div>
      <div className="project relative">
        <a href="https://kook-club.herokuapp.com/">
          <h3>Kook Club</h3>
        </a>
        <p>
          Fun APP that is designed for surfers to create events to meet up and
          surf with friends. The goal is to increase socialization between
          surfers and improve surf safety for new surfers. Styled with
          bootstrap, created with React, Node, and Express. Deployed through
          Heroku
        </p>
      </div>
    </div>
  );
}

export default ReactProjects;
