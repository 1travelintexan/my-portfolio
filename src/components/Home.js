import React, { Component } from "react";
import image from "../images/mac.jpeg";

class Home extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="mac picture"
          className="absolute object-cover w-full h-full"
        />
        <section className="home relative flex items-start min-h-screen pt-8 lg:pt-28 px-8">
          <h1 className=" text-6xl text-blue-100 font-bold cursive mt-96 md:text-8xl md:mt-80">
            Joshua George
          </h1>
          <h5 className="best">Do your best and the rest will follow</h5>
        </section>
      </main>
    );
  }
}
export default Home;
