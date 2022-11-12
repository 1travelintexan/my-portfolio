import React from "react";
import image from "../images/macbookAirPic.jpeg";

function Vanilla() {
  return (
    <main>
      <div>
        <img src={image} alt="macbook" className="background" loading="lazy" />
        <div className="relative flex justify-center">
          <h3 className="projects-banner">Vanilla JS Projects</h3>
        </div>
        <section className="relative flex justify-center">
          <div className="projects-container">
            <div className="project">
              <a href="https://1travelintexan.github.io/Rock-Paper-Scissors/">
                <h3>Rock, Paper, Scissors</h3>
              </a>
              <h5 className="slogan">
                Matrix themed rock, paper scissors game.
              </h5>
            </div>
            <div className="project">
              <a href="https://1travelintexan.github.io/etch-a-sketch/">
                <h3>Josh-a-Sketch</h3>
              </a>
              <h5 className="slogan">Virtual Etch-a-Sketch app.</h5>
            </div>
            <div className="project relative">
              <a href="https://1travelintexan.github.io/lab-javascript-memory-game/">
                <h3>Super-hero Memory Game</h3>
              </a>
              <h5 className="slogan">
                Card flipping, memory game made with vanilla HTML, CSS and
                Javascript
              </h5>
            </div>
            <div className="project relative">
              <a href="https://1travelintexan.github.io/Drum-kit/">
                <h3>Drum Kit!</h3>
              </a>
              <h5 className="slogan">
                Virtual Drum set, with sounds and effects.
              </h5>
            </div>
            <div className="project relative">
              <a href="https://1travelintexan.github.io/Calculator/">
                <h3>TI-83 Calculator</h3>
              </a>
              <h5 className="slogan">
                Calculator app, designed to resemble the TI-83.
              </h5>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Vanilla;
