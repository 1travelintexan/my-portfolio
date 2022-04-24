import React, { useEffect, useState } from "react";
import image from "../images/mac.jpeg";
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png";
import jsImage from "../images/js.png";
import nodeImage from "../images/nodeJsLogo.png";
import reactImage from "../images/react.png";
import tsImage from "../images/ts.png";
import mongoImage from "../images/mongoDB.png";
import { Button } from "bootstrap";

function Home() {
  const [quote, setQuote] = useState({ quote: "", author: "" });

  useEffect(() => {
    const apiget = async () => {
      let fetchResponse = await fetch("https://type.fit/api/quotes");
      let data = await fetchResponse.json();
      let randomQuoteIndex = Math.floor(Math.random() * data.length);

      setQuote({
        quote: data[randomQuoteIndex].text,
        author: data[randomQuoteIndex].author,
      });
    };
    apiget();
  }, []);

  async function handleQuote() {
    let fetchResponse = await fetch("https://type.fit/api/quotes");
    let data = await fetchResponse.json();
    let randomQuoteIndex = Math.floor(Math.random() * data.length);
    setQuote({
      quote: data[randomQuoteIndex].text,
      author: data[randomQuoteIndex].author,
    });
  }

  return (
    <main>
      <img src={image} alt="macbook" className=" background" loading="lazy" />

      <div className="quote-container">
        <h1 className="home-banner">Inspirational Quote of the day:</h1>
        <section className="quote-div">
          <h5 className="quote">{quote.quote}</h5>
          <h6>-{quote.author}</h6>
          <h3 id="quote-btn" onClick={handleQuote}>
            New Quote
          </h3>
        </section>
        {/* <div id="game-btn">
          <h3>Have time for a quick game?</h3>
          <button id="play-btn">Play</button>
        </div> */}
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

export default Home;
