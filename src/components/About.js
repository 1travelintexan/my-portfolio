import React, { Component } from "react";
import image from "../images/code1.jpeg";
import image2 from "../images/myFace.jpg";
import image3 from "../images/meAndRagnar.jpg";

class About extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="coding"
          className="absolute object-cover w-full h-full"
          loading="lazy"
        />
        <div className="main-about">
          <h3 className="about-banner">A little about me...</h3>
          <div className="about-pic-and-paragraph">
            <div>
              <img className="about-pics" src={image2} alt="personal" />
              <img
                className="about-pics about-pic-offset"
                src={image3}
                alt="Baby Ragnar!"
              />
            </div>
            <div className="about-paragraph">
              <h5 className="bigger-font">
                -Junior Full-Stack Web Developer(MERN).
              </h5>
              <h5>
                -Native Texan, doing my best to learn and grow as a person and
                as a developer.
              </h5>
              <h5>
                -Avid surfer, dive master and dog lover. I try to bring the same
                wonder, curiosity, and awe from my life in the ocean to my
                coding career.
              </h5>
              <h5>
                -I'm a recreational chess player and a bit weird, I like puzzles
                and solving complex problems.
              </h5>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default About;
