import React, { Component } from "react";
import image from "../mac.jpeg";

class Home extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="mac picture"
          className="absolute object-cover w-full h-full"
        />
        <section className="relative flex items-start min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-blue-100 font-bold cursive mt-40 leading-none lg:leading-snug home-name">
            Joshua George
          </h1>
        </section>
      </main>
    );
  }
}
export default Home;
