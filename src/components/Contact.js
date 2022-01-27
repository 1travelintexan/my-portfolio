import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import image from "../images/dark-world.jpeg";

class Contact extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="macbook air"
          className="absolute object-cover w-full h-full"
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
      </main>
    );
  }
}
export default Contact;
