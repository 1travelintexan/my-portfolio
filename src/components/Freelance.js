import React from "react";
import image from "../images/macbookAirPic.jpeg";

function Freelance() {
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
          <h3 className="projects-banner">Freelance Sites</h3>
        </div>
        <section className="relative flex justify-center">
          <div className="projects-container">
            <div className="project">
              <a href="https://oliguinco.netlify.app/">
                <h3>The Olguin Co.</h3>
              </a>
              <h5 className="slogan">
                Webpage for a local T-shirt start-up company.
              </h5>
            </div>
            <div className="project">
              <a href="https://massage-by-solange.netlify.app">
                <h3>Solange the Massage Therapist</h3>
              </a>
              <h5 className="slogan">Webpage for a Portuguese Masseuse.</h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Freelance;
