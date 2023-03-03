import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import backgroundImage from "../images/dark-world.jpeg";

class Contact extends Component {
  render() {
    return (
      <main className="background4">
        <div className="contact-container">
          <div className="contact-list">
            <h3 className="contact-item">
              Email:
              <a href="mailto:horheyinc8@gmail.com"> Horheyinc8@gmail.com</a>
            </h3>
            <h3 className="contact-item">WhatsApp: +1 832 604 3287</h3>
            <h3 className="contact-item">European Number: +32 662 572 121</h3>
            <h3 className="contact-item">Location: Anywhere and everywhere</h3>
          </div>

          <div className="contact-buttons-container">
            <section className="m-10 ">
              <h3 className="contact-banner">
                Feel free to push all my buttons
              </h3>
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
        </div>
      </main>
    );
  }
}
export default Contact;
