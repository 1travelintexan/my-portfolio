import { useEffect, useRef } from "react";
import p5 from "p5";
import background from "../images/houseBG.jpeg";
import dadImage from "../images/dad.png";
import babyImage from "../images/baby.png";
import coffeeTableImage from "../images/coffeeTable.png";
import puppyImage from "../images/puppy.png";
import coffeeImage from "../images/coffee.png";

let bg;
//dad image and coordinates
let dad;
let dadSize = 160;
let dadX = 50;
let dadY;
let dadJumping;
//coffee image and coordinates
let coffee;
let coffeeSize;
let coffeeY;
let coffeeX;

let objectsArray;
let baby;
let coffeeTable;
let puppy;
let speed;

function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    p.createCanvas(window.innerWidth - 33, window.innerHeight * 0.35).parent(
      "game-container"
    );

    //load all images
    bg = p.loadImage(background);
    dad = p.loadImage(dadImage);
    dadY = p.height - dadSize;
    dadJumping = false;

    coffee = p.loadImage(coffeeImage);
    coffeeSize = 175;
    coffeeX = p.width * 2;
    coffeeY = p.height - coffeeSize - 30;

    baby = p.loadImage(babyImage);
    coffeeTable = p.loadImage(coffeeTableImage);
    puppy = p.loadImage(puppyImage);
    speed = 2;

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
    p.image(dad, dadX, dadY, dadSize, dadSize);
    p.image(coffee, coffeeX, coffeeY, coffeeSize, coffeeSize);
    coffeeX = coffeeX - 1.5;

    if (p.mouseIsPressed) {
      dadJumping = true;
    }

    if (dadJumping === true) {
      dadY = dadY - 4;
    } else if (dadJumping === false) {
      dadY = dadY + 6;
    }
    if (dadY < p.height - dadSize - 160) {
      dadJumping = false;
    }
    if (dadY >= p.height - dadSize) {
      dadY = p.height - dadSize;
    }

    for (let i = 0; i < objectsArray.length; i++) {
      let current = objectsArray[i];
      p.image(current.img, current.x, current.y, current.width, current.height);
      current.x = current.x - 8;

      //collision detection
      if (
        current.x < dadX + dadSize - 70 &&
        dadY + dadSize > current.y + 30 &&
        dadX < current.x + current.width - 30
      ) {
        p.noLoop();
      }

      // cycle the objects to the front
      if (current.x < -300) {
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
