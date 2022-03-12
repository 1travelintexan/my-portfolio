import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import backgroundImage from "../images/dark-world.jpeg";
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png";
import jsImage from "../images/js.png";
import nodeImage from "../images/node.png";
import reactImage from "../images/react.png";
import tsImage from "../images/ts.png";
import mongoImage from "../images/mongoDB.png";

class Contact extends Component {
  render() {
    return (
      <main>
        <img
          src={backgroundImage}
          alt="macbook air"
          className="background"
          loading="lazy"
        />
        <div className="contact-container">
          <section>
            <h1 className="font-bold cursive contact-name">Joshua George</h1>
          </section>
          <div className="contact-list">
            <ul>
              <li>
                <a href="mailto:horheyinc8@gmail.com">Horheyinc8@gmail.com</a>
              </li>
              <li>WhatsApp: +351 912 511 379 </li>
              <li>Location: Conroe, TX</li>
            </ul>
          </div>
        </div>
        <div className="contact-buttons-container">
          <section className="m-10 ">
            <h3 className="contact-banner">Feel free to push all my buttons</h3>
          </section>
          <div className="contact-icons">
            <SocialIcon
              url="https://www.linkedin.com/in/-joshua-george/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
            />
            <SocialIcon
              url="https://www.instagram.com/1travelintexan/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
            />
            <SocialIcon
              url="https://github.com/1travelintexan"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
            />
            <SocialIcon
              url="https://www.codewars.com/users/1travelintexan"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
            />
            <SocialIcon
              url="https://www.facebook.com/joshua.george.7"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
            />
          </div>
        </div>
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
export default Contact;
