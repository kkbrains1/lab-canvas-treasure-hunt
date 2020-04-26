class Treasure {
  constructor ($canvas, context) {
    this.canvas = $canvas;
    this.context = context;
    this.col = 0;
    this.row = 0;
    this.setPositionRandom();
    this.treasureImage = new Image();
    this.treasureImage.src = '/images/treasure.png';
  }

  setPositionRandom () {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
  }

  draw() {
    const width = this.canvas.width;
    const height = this.canvas.height;

    this.treasureImage.addEventListener('load', () => {   
      this.context.drawImage(this.treasureImage, (this.col * width) / 10, (this.row * width) / 10, width/10 , height/10);
      });

    this.context.drawImage(this.treasureImage, (this.col * width) / 10, (this.row * width) / 10, width/10 , height/10);
  }



}