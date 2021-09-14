import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import image from "../images/dark-world.jpeg";

class Contact extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="mac picture"
          className="absolute object-cover w-full h-full"
        />
        <div className="contact">
          <section>
            <h1 className="text-6xl text-blue-100 ml-10 font-bold cursive leading-none lg: contact-name">
              Joshua George
            </h1>
          </section>
          <div className="contact-list">
            <ul>
              <li>
                <a href="mailto:horheyinc8@gmail.com">
                  <h3>Horheyinc8@gmail.com</h3>
                </a>
              </li>
              <li>Phone: +34 686 555 173 </li>
              <li>Location: Anywhere and Everywhere!</li>
            </ul>
          </div>
          <section className="mt-10 ">
            <h3 className="contact-banner">
              Feel free to push all my buttons...
            </h3>
          </section>
        </div>
        <div className="icons">
          <SocialIcon
            url="https://www.linkedin.com/in/-joshua-george/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://www.instagram.com/1travelintexan/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://github.com/1travelintexan"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://www.codewars.com/users/1travelintexan"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://www.facebook.com/joshua.george.7"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
        </div>
      </main>
    );
  }
}
export default Contact;
