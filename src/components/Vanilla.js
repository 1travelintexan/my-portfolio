import React from "react";
import image from "../images/macbookAirPic.jpeg";

function Vanilla() {
  return (
    <main>
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
      <div className="relative project">
        <a href="https://1travelintexan.github.io/Rock-Paper-Scissors/">
          <h3>Rock, Paper, Scissors</h3>
        </a>
        <p>
          Matrix themed rock, paper scissors game that is uses DOM manipulation
          and Math.random for the computer selections. Was very fun to code and
          be creative.
        </p>
      </div>
      <div className="relative project">
        <a href="https://1travelintexan.github.io/etch-a-sketch/">
          <h3>Josh-a-Sketch</h3>
        </a>
        <p>
          Very creative project that uses a lot of hover effects to simulate a
          wonderful time in my childhood. If you remember how fun
          Etch-a-sketch's were, then you should consider yourself lucky. This
          was intended to bring some nostalgia to my Javascript practice.
        </p>
      </div>
      <div className="relative project">
        <a href="https://1travelintexan.github.io/Drum-kit/">
          <h3>Drum Kit!</h3>
        </a>
        <p>
          This was a very fun project that using onclick events as well as
          keyboard events to give the user the feeling of playing the drums from
          the comfort of their computer chair.
        </p>
      </div>
      <div className="relative project">
        <a href="https://1travelintexan.github.io/Calculator/">
          <h3>TI-83 Calculator</h3>
        </a>
        <p>
          Again, using my childhood for ideas... Just a simple calculator app
          that was styled to look like the schools calculator when I was
          younger.
        </p>
      </div>
    </main>
  );
}

export default Vanilla;
