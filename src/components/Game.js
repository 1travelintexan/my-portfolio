import { useEffect, useRef } from "react";
import p5 from "p5";
import background from "../images/houseBG.jpeg";
import dadImage from "../images/dad.png";
import babyImage from "../images/baby.png";
import coffeeTableImage from "../images/coffeeTable.png";
import puppyImage from "../images/puppy.png";

let bg;
let dad;
let baby;
let coffeeTable;
let puppy;
let dadSize = 130;
let dadY;
let tableX;
let tableY;
function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    bg = p.loadImage(background);
    dad = p.loadImage(dadImage);
    baby = p.loadImage(babyImage);
    coffeeTable = p.loadImage(coffeeTableImage);
    puppy = p.loadImage(puppyImage);
    p.createCanvas(window.innerWidth, window.innerHeight * 0.35).parent(
      "game-container"
    );
    tableX = p.width - 100;
    tableY = p.height - 50;
    dadY = p.height - dadSize;
  };

  p.draw = function () {
    p.background(bg);
    p.image(dad, 50, dadY, dadSize, dadSize);
    p.image(coffeeTable, 200, dadY, dadSize, dadSize);
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
