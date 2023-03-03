import React, { Component } from "react";
import image2 from "../images/myFace.jpg";
import image3 from "../images/meAndRagnar.jpg";

class About extends Component {
  render() {
    return (
      <main className="background3">
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
              <h3 className="bigger-font">
                Junior Full-Stack Web Developer(MERN)
              </h3>
              <h4>
                🤠-Native Texan and former CnC Machine Programmer, I made my
                career change during the pandemic to tech. Tech is the future
                and it is something I am excited to be a part of.
              </h4>
              <h4>
                🐶-Dog loving computer coder, avid surfer, and chess player. I
                believe that sums me up perfectly.
              </h4>
              <h4>
                👨‍💻-Just doing my best to learn and grow everyday, as a developer
                and as a person.
              </h4>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default About;
