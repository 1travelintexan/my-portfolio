import React, { Component } from "react";
import image from "../images/code1.jpeg";
import image2 from "../images/myFace.jpg";

class About extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="coding"
          className="absolute object-cover w-full h-full"
        />
        <div className="main-about">
          <h3 className="about-banner">A little about me...</h3>
          <div className="about-pic-and-paragraph">
            <div>
              <img className="about-face-pic" src={image2} alt="personal" />
            </div>
            <div className="about-paragraph">
              <h5>-Junior Full-Stack Web Developer(MERN).</h5>
              <h5>
                -Native Texan, doing my best to learn and grow as a person and
                as a developer.
              </h5>
              <h5>
                -Avid surfer and dive master. I bring the same wonder,
                curiosity, and awe from the ocean to my web development career.
              </h5>
              <h5>
                -Recreational chess player and someone who loves puzzles and
                solving problems.
              </h5>
            </div>
          </div>
          <div className="relative flex justify-center mt-10 ">
            <h3 className="about-bottom-banner">
              Let's do something together!
            </h3>
          </div>
        </div>
      </main>
    );
  }
}
export default About;
