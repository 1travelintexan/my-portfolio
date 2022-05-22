import { useEffect, useRef } from "react";
import p5 from "p5";
import background from "../images/houseBG.jpeg";
import dadImage from "../images/dad.png";
import babyImage from "../images/baby.png";
import coffeeTableImage from "../images/coffeeTable.png";
import puppyImage from "../images/puppy.png";
import coffeeImage from "../images/coffee.png";

let bg;
let dad;
let coffee;
let objectsArray;
let baby;
let coffeeTable;
let puppy;
let speed;
let dadSize = 160;
let dadY;
function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight * 0.35).parent(
      "game-container"
    );
    //load all images
    bg = p.loadImage(background);
    dad = p.loadImage(dadImage);
    coffee = p.loadImage(coffeeImage);
    baby = p.loadImage(babyImage);
    coffeeTable = p.loadImage(coffeeTableImage);
    puppy = p.loadImage(puppyImage);
    speed = 2;
    dadY = p.height - dadSize;

    objectsArray = [
      {
        img: baby,
        x: p.width + 200,
        y: p.height - 90,
        width: 100,
        height: 100,
      },
      {
        img: coffeeTable,
        x: p.width + 1200,
        y: p.height - 90,
        width: 170,
        height: 100,
      },
      {
        img: puppy,
        x: p.width + 2200,
        y: p.height - 100,
        width: 100,
        height: 100,
      },
    ];
  };

  p.draw = function () {
    p.background(bg);
    p.image(dad, 50, dadY, dadSize, dadSize);
    p.image(coffee, p.width - 200, dadY, 200, 200);
    for (let i = 0; i < objectsArray.length; i++) {
      let current = objectsArray[i];
      p.image(current.img, current.x, current.y, current.width, current.height);
      current.x = current.x - 5;
      if (current.x < -200) {
        current.x = p.width + 1800;
      }
    }
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
