//const image  = document.getElementsByClassName("image");
//const imgage = document.createElement("img");

class Character {
  constructor (row, col , $canvas, context) {
    this.row = 0;
    this.col = 0;
    this.canvas = $canvas;
    this.context = context;
    this.playerImage = new Image();
    this.playerImage.src = '/images/character-down.png';
  }

  draw() {
      //const playerImage = '/images/character-down.png';
      //const playerImage = new Image();
      //this.playerImage.src = '/images/character-down.png';

      const width = this.canvas.width;
      const height = this.canvas.height;

      //this.context.drawImage(playerImage, 0, 0)
      this.playerImage.addEventListener('load', () => {   
        this.context.drawImage(this.playerImage, (this.col * width) / 10, (this.row * height) / 10, width/10 , height/10);
        });

      this.context.drawImage(this.playerImage, (this.col * width) / 10, (this.row * height) / 10, width/10 , height/10);
    }

    moveUp() {
      this.row -= 1;
      console.log('row and col' , this.row, this.col);
    }

    moveDown() {
      this.row += 1;
      console.log('row and col' , this.row, this.col);
    }

    moveRight() {
      this.col += 1;
      console.log('row and col' , this.row, this.col);
    }

    moveLeft() {
      this.col -=1;
      console.log('row and col' , this.row, this.col);
    }

}





/* 
player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2 
*/