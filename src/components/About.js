import React, { Component } from "react";
import image from "../code1.jpeg";

class About extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="code picture"
          className="absolute object-cover w-full h-full"
        />
        <div className="relative flex justify-center">
          <h3 className="all-about-me">A little about me</h3>
        </div>
        <section className="relative flex justify-center">
          <div className="about">
            <h5>Native Texan, trying to make his make on the world</h5>
            <h5>Junior Full-Stack Web Developer</h5>
            <h5>Avid surfer and lover of anything in the ocean</h5>
            <h5>Recreational chess player and code wars nube</h5>
          </div>
        </section>
        <div className="relative flex justify-center ">
          <h3 className="collaborate">Let's collaborate together!</h3>
        </div>
      </main>
    );
  }
}
export default About;
