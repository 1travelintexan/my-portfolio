import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import backgroundImage from "../images/dark-world.jpeg";

class Contact extends Component {
  render() {
    return (
      <main>
        <img
          src={backgroundImage}
          alt="macbook air"
          className="background about-background"
          loading="lazy"
        />
        <div className="contact-container">
          <div className="contact-list">
            <ul>
              <li>
                Email:{" "}
                <li>
                  <a href="mailto:horheyinc8@gmail.com">Horheyinc8@gmail.com</a>
                </li>
              </li>
              <li>
                WhatsApp:
                <li>+1 832 604 3287 </li>
              </li>
              <li>
                European Number:
                <li>+32 662 572 121 </li>
              </li>
              <li>
                <li>Location:</li> Anywhere and everywhere
              </li>
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
