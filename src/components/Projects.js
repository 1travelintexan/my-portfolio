import React, { Component } from "react";

import image from "../mac-keyboard.jpeg";

class Projects extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="keyboard picture"
          className="absolute object-cover w-full h-full"
        />
        <div className="relative flex justify-center">
          <h3 className="all-about-me">Some of my handy work:</h3>
        </div>
        <section className="relative flex justify-center">
          <div className="projects">
            <div className="margin">
              <a href="https://lifes-a-beach.herokuapp.com/">
                <h3>Life's a Beach</h3>
              </a>
              <p>
                This was a joint effort app with my partner, it is designed to
                help clients budget for their dream vacation. The client enters
                information about their dream trip and the app provides the
                total estimated cost for it, as well as, a pie chart to break
                down the expenses
              </p>
            </div>
            <div className="margin">
              <a href="https://kook-club.herokuapp.com/">
                <h3>Kook Club</h3>
              </a>
              <p>
                One of my more recent projects, Kook club is a friendly app that
                is designed for surfers. It allows the client to create events
                and anyone who is signed up can comment or give a 'shaka' for
                the events. I hope this can increase socialization between
                surfers and improve surf saftey. No one should ever surf alone
                (deployed through Heroku)
              </p>
            </div>
            <div className="margin">
              <a href="https://1travelintexan.github.io/Rippin-Brah-/">
                <h3>Rippin Brah!</h3>
              </a>
              <p>
                This is a 8-bit surfing game that is almost as fun and addictive
                to play as it was to create. One of my first projects, and one
                that always brings a smile to my face, it's modeled off of a
                childhood game that I was obsessed with.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Projects;
