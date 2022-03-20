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
        <img src={image} alt="macbook" className=" background" loading="lazy" />
        <section className="home">
          <h1 className=" text-6xl text-blue-100 font-bold cursive">
            Joshua George
          </h1>
          <h5 className="slogan">Do your best and the rest will follow</h5>
        </section>
        <div className="logos-container">
          <div className="logos-div">
            <img
              src={jsImage}
              alt="js"
              className="logos relative"
              loading="lazy"
            />
            <img
              src={htmlImage}
              alt="html"
              className="logos relative"
              loading="lazy"
            />
            <img
              src={cssImage}
              alt="css"
              className="logos relative"
              loading="lazy"
            />
            <img
              src={reactImage}
              alt="react"
              className="logos relative"
              loading="lazy"
            />
            <img
              src={tsImage}
              alt="ts"
              className="logos relative"
              loading="lazy"
            />
            <img
              src={nodeImage}
              alt="node"
              className="logos relative"
              loading="lazy"
            />
            <img
              src={mongoImage}
              alt="mongo"
              className="logos relative"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    );
  }
}
export default Home;
