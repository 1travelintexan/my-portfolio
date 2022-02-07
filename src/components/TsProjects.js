import React from "react";
import image from "../images/macbookAirPic.jpeg";

function TsProjects() {
  return (
    <div>
      <img
        src={image}
        alt="macbook"
        className="absolute object-cover w-full h-full"
        loading="lazy"
      />
      <div className="relative flex justify-center">
        <h3 className="projects-banner">Typescript Projects</h3>
      </div>
      <section className="relative flex justify-center">
        <div className="projects-container">
          <div className="project">
            <a href="https://fake-shopping-cart.netlify.app/">
              <h3>Fake Shopping Cart App</h3>
            </a>
            <h5 className="slogan">
              Fun and fake shopping app. It was created using the fake shopping
              api and Typescript.Deployed with Netlify.
            </h5>
          </div>
          <div className="project">
            <a href="https://tic-tac-love.netlify.app/">
              <h3>Tic-Tac-Love?</h3>
            </a>
            <h5 className="slogan">
              Very fun Tic-Tac-Toe game created using Typescript with fun dating
              site theme that predicts the success rate of your relationship
              based on your playing style and deployed with Netlify.
            </h5>
          </div>
          <div className="project">
            <a href="https://read-a-book-and-chill.netlify.app/">
              <h3>KindleFlix</h3>
            </a>
            <h5 className="slogan">
              This is an App designed to encourage people to read more, note the
              URL (read-a-book-and-chill). It uses Typescript along with
              useState to save book titles to your book list so you can have a
              easy reference to your future reads. Also deployed with Netlify
              for practice using different sites.{" "}
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TsProjects;
