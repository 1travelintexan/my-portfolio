import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import image from "../dark-world.jpeg";

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
            <h1 className="text-3xl text-blue-100 ml-10 font-bold cursive leading-none lg:leading-snug home-name">
              Joshua George
            </h1>
          </section>
          <div className="list">
            <ul>
              <li>
                Email: <Link>Horheyinc8@gmail.com</Link>
              </li>
              <li>Phone: +34 686 555 173 </li>
              <li>Location: Barcelona, Spain</li>
            </ul>
          </div>
          <section className="mt-10 ">
            <h3 className="push">Feel free to push all my buttons...</h3>
          </section>
        </div>
        <div className="icons">
          <SocialIcon
            url="https://www.linkedin.com/in/-joshua-george/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 55, width: 55 }}
          />
          <SocialIcon
            url="https://www.instagram.com/1travelintexan/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 55, width: 55 }}
          />
          <SocialIcon
            url="https://github.com/1travelintexan"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 55, width: 55 }}
          />
          <SocialIcon
            url="https://www.codewars.com/users/1travelintexan"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 55, width: 55 }}
          />
          <SocialIcon
            url="https://www.facebook.com/joshua.george.7"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 55, width: 55 }}
          />
        </div>
      </main>
    );
  }
}
export default Contact;
