import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <main className="main-projects background">
        <h3 className="projects-banner">Some of my handy work:</h3>
        <section className="relative flex justify-center">
          <div className="projects-container">
            <div className="project">
              <Link className="project-link" to="/project/reactprojects">
                <h3>-React Projects</h3>
              </Link>
              <h5 className="slogan">
                Made with React and deployed with Netlify
              </h5>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/TSprojects">
                <h3>-Typescript Projects</h3>
              </Link>
              <h5 className="slogan">
                Made with React and configured with Typescript{" "}
              </h5>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/vanillaJS">
                <h3> -HTML Projects</h3>
              </Link>
              <h5 className="slogan">Only HTML, CSS and Javascript</h5>
            </div>
            <div className="project">
              <Link className="project-link" to="/project/freelance">
                <h3>-SSR Projects (server side render)</h3>
              </Link>
              <h5 className="slogan">Apps created using Express and MongoDB</h5>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Projects;
