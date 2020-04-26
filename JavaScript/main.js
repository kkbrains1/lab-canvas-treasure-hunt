// main.js
/* const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  context.beginPath();
    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {  
        //console.log(row,column) ;
        context.rect(row * (width/10), column * (height/10), width, height);
        context.stroke(); 
      }
    }
} */

const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
console.log($canvas.width, $canvas.height)
//console.dir($canvas);
//console.dir(context);

const game = new Game($canvas, context);

game.start();

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      game.player.moveLeft();
      game.drawEverything();
      console.log('left');
      break;
    case 38:
      game.player.moveUp();
      game.drawEverything();
      console.log('up');
      break;
    case 39:
      game.player.moveRight();
      game.drawEverything();
      console.log('right');
      break;
    case 40:
      game.player.moveDown()
      game.drawEverything();;
      console.log('down');
      break;
  }
});