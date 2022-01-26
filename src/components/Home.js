import React, { Component } from "react";
import image from "../images/mac.jpeg";
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png";
import jsImage from "../images/js.png";
import nodeImage from "../images/node.png";
import reactImage from "../images/react.png";
import tsImage from "../images/ts.png";

class Home extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="macbook"
          className="absolute object-cover w-full h-full"
        />
        <section className="home relative flex items-start min-h-screen pt-8 lg:pt-28 px-8">
          <h1 className=" text-6xl text-blue-100 font-bold cursive mt-96 md:text-8xl md:mt-80">
            Joshua George
          </h1>
          <h5 className="best">Do your best and the rest will follow</h5>
          <div className="logos-div">
            <img src={jsImage} alt="html" className="logos relative" />
            <img src={htmlImage} alt="html" className="logos relative" />
            <img src={cssImage} alt="html" className="logos relative" />
            <img src={reactImage} alt="html" className="logos relative" />
            <img src={tsImage} alt="html" className="logos relative" />
            <img src={nodeImage} alt="html" className="logos relative" />
          </div>
        </section>
      </main>
    );
  }
}
export default Home;
