import React from "react";
import image from "../images/macbookAirPic.jpeg";

function ReactProjects() {
  return (
    <div className="background2">
      <div>
        <div className="relative flex justify-center">
          <h3 className="projects-banner">CRA Projects</h3>
        </div>
        <section className="relative flex justify-center">
          <div className="projects-container">
            <div className="project">
              <a href="https://move-it-or-lose-it.netlify.app/">
                <h3>Move-it</h3>
              </a>
              <h5 className="slogan">
                Fast paced Chess game, programmed from scratch without the help
                of chess algorithm.
              </h5>
            </div>
            <div className="project relative">
              <a href="https://kook-club.netlify.app/">
                <h3>Kook Club</h3>
              </a>
              <h5 className="slogan">
                Designed for surfers to create social events, communicate via
                socket IO and organize meet ups for surf sessions.
              </h5>
            </div>
            <div className="project relative">
              <a href="https://star-wars-app-beta.vercel.app/">
                <h3>Star Wars APP (Next.js)</h3>
              </a>
              <h5 className="slogan">
                Using SWAPI ('Star Wars API') to display characters, planets and
                film details. Built with Next js, deployed with Vercel
              </h5>
            </div>
            <div className="project relative">
              <a href="https://massage-by-solange.netlify.app">
                <h3> Massage by Solange</h3>
              </a>
              <h5 className="slogan">
                Static webpage for a friend and amazing masseuse in Ericeira,
                Portugal
              </h5>
            </div>
            <div className="project relative">
              <a href="https://massage-benedict.netlify.app">
                <h3>Massage Benedict</h3>
              </a>
              <h5 className="slogan">SPA for local masseuse</h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ReactProjects;
