import React, { Component } from "react";
import image from "../images/mac.jpeg";
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png";
import jsImage from "../images/js.png";
import nodeImage from "../images/node.png";
import reactImage from "../images/react.png";
import tsImage from "../images/ts.png";
import mongoImage from "../images/mongoDB.png";

class Home extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="macbook"
          className="absolute object-cover w-full h-full"
        />
        <section className="home relative flex items-start min-h-screen pb-15 px-8">
          <h1 className=" text-6xl text-blue-100 font-bold cursive mt-96 md:text-8xl md:mt-80">
            Joshua George
          </h1>
          <h5 className="slogan">Do your best and the rest will follow</h5>
          <div className="logos-div">
            <img src={jsImage} alt="js" className="logos relative" />
            <img src={htmlImage} alt="html" className="logos relative" />
            <img src={cssImage} alt="css" className="logos relative" />
            <img src={reactImage} alt="react" className="logos relative" />
            <img src={tsImage} alt="ts" className="logos relative" />
            <img src={nodeImage} alt="node" className="logos relative" />
            <img src={mongoImage} alt="mongo" className="logos relative" />
          </div>
        </section>
      </main>
    );
  }
}
export default Home;
