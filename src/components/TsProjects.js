import React from "react";
import image from "../images/macbookAirPic.jpeg";

function TsProjects() {
  return (
    <div>
      <img src={image} alt="macbook" className="background" loading="lazy" />
      <div className="relative flex justify-center">
        <h3 className="projects-banner">Typescript Projects</h3>
      </div>
      <section className="relative flex justify-center">
        <div className="projects-container">
          <div className="project">
            <a href="https://fake-shopping-cart.netlify.app/">
              <h3>Shopping Cart</h3>
            </a>
            <h5 className="slogan">
              Clone shopping App created using a mock up api with products
            </h5>
          </div>
          <div className="project">
            <a href="https://tic-tac-love.netlify.app/">
              <h3>Tic-Tac-Love?</h3>
            </a>
            <h5 className="slogan">
              Fun Tic-Tac-Toe game with 'AI' to predict compatible partners
            </h5>
          </div>
          <div className="project">
            <a href="https://read-a-book-and-chill.netlify.app/">
              <h3>Kindle-Flix</h3>
            </a>
            <h5 className="slogan">
              App designed to save and organize books already read
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TsProjects;
