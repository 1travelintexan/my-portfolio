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
                -Native Texan and former CnC Machine Programmer, I made my
                career change during the pandemic to tech. Tech is the future
                and it is something I am excited about learning.
              </h5>
              <h5>
                -Dog lover, avid surfer, dive master, and chess player. That
                sums me up perfectly, and in the correct order as well
              </h5>
              <h5>
                -I am doing my best to learn and grow everyday, as a person and
                as a developer. This is such an exciting time to be alive!
              </h5>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default About;
