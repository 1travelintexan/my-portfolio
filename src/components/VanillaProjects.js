import React from "react";
import image from "../images/macbookAirPic.jpeg";

function Vanilla() {
  return (
    <main>
      <div>
        <img
          src={image}
          alt="macbook"
          className="absolute object-cover w-full h-full"
          loading="lazy"
        />
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
                Matrix themed rock, paper scissors game that is uses DOM
                manipulation and Math.random for the computer selections. Was
                very fun to code and be creative.
              </h5>
            </div>
            <div className="project">
              <a href="https://1travelintexan.github.io/etch-a-sketch/">
                <h3>Josh-a-Sketch</h3>
              </a>
              <h5 className="slogan">
                Very creative project that uses a lot of hover effects to
                simulate a wonderful time in my childhood. If you remember how
                fun Etch-a-sketch's were, then you should consider yourself
                lucky. This was intended to bring some nostalgia to my
                Javascript practice.
              </h5>
            </div>
            <div className="project relative">
              <a href="https://1travelintexan.github.io/Drum-kit/">
                <h3>Drum Kit!</h3>
              </a>
              <h5 className="slogan">
                This was a very fun project that using onclick events as well as
                keyboard events to give the user the feeling of playing the
                drums from the comfort of their computer chair.
              </h5>
            </div>
            <div className="project relative">
              <a href="https://1travelintexan.github.io/Calculator/">
                <h3>TI-83 Calculator</h3>
              </a>
              <h5 className="slogan">
                Again, using my childhood for ideas... Just a simple calculator
                app that was styled to look like the schools calculator when I
                was younger.
              </h5>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Vanilla;
