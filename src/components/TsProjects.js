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
              <h3>Fake Shopping Cart</h3>
            </a>
            <h5 className="slogan">Fun app created using shopping api</h5>
          </div>
          <div className="project">
            <a href="https://tic-tac-love.netlify.app/">
              <h3>Tic-Tac-Love?</h3>
            </a>
            <h5 className="slogan">Fun Tic-Tac-Toe game using Typescript</h5>
          </div>
          <div className="project">
            <a href="https://read-a-book-and-chill.netlify.app/">
              <h3>KindleFlix</h3>
            </a>
            <h5 className="slogan">App designed to encourage more reading</h5>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TsProjects;
