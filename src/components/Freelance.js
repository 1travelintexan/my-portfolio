import React from "react";
import image from "../images/macbookAirPic.jpeg";

function Freelance() {
  return (
    <div>
      <img
        src={image}
        alt="macbook"
        className="absolute object-cover w-full h-full"
        loading="lazy"
      />
      <div>
        <h1 className="relative">Some of my Freelance work</h1>
        <div className="relative project">
          <a href="https://oliguinco.netlify.app/">
            <h3>The Olguin Co.</h3>
          </a>
          <p>Freelance project for a T-shirt start-up company</p>
        </div>
        <div className="relative project">
          <a href="https://massage-by-solange.netlify.app">
            <h3>Solange the Massage therapist</h3>
          </a>
          <p>Webpage for a local Masseuse</p>
        </div>
      </div>
    </div>
  );
}

export default Freelance;
