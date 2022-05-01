import { useEffect, useRef } from "react";
import p5 from "p5";
import background from "../images/houseBG.jpeg";
import dadImage from "../images/dad.png";

let bg;
let dad;
let tableX;
let tableY;
function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    bg = p.loadImage(background);
    dad = p.loadImage(dadImage);
    p.createCanvas(window.innerWidth, window.innerHeight * 0.2).parent("game");
    tableX = p.width - 100;
    tableY = p.height - 50;
  };

  p.draw = function () {
    p.background(bg);
    p.image(dad, 50, 50);
    p.circle(40, p.height - 50, 40);
    p.rect(tableX, tableY, 200, 50);
    tableX = tableX - 1;
  };
}

function Game() {
  // create a reference to the container in which the p5 instance should place the canvas
  const p5ContainerRef = useRef();

  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div className="game" ref={p5ContainerRef} />;
}

export default Game;
