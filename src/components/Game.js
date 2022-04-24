// import React from "react";
// import Sketch from "react-p5";

// function Game() {
//   let a = 300;
//   let b = 300;
//   let bg;
//   let dad;

//   let setup = (p5, parent) => {
//     bg = p5.loadImage("../images/houseBG.jpeg");
//     dad = p5.loadImage("../images/dad.png");
//     let canvas = p5.createCanvas(p5.windowWidth, 200).parent(parent);
//     let x = 0;
//     let y = p5.windowHeight - p5.height;
//     canvas.position(x, y);
//     p5.image(dad, 20, 40, 100, 100);
//   };
//   let draw = (p5) => {
//     p5.background("grey");
//     p5.image(dad, 100, 100);
//   };
//   return (
//     <div className="game">
//       <Sketch setup={setup} draw={draw} />
//     </div>
//   );
// }

// export default Game;
