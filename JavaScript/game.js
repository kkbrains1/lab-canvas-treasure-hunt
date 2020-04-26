class Game {
  constructor ($canvas, context) {
    this.canvas = $canvas;
    this.context = context;
    this.background = new Background($canvas, context);
    this.player = new Character(0, 0, $canvas, context);
    this.treasure = new Treasure($canvas, context);
  }

  start () {
    this.background.draw();
    this.player.draw();
    this.treasure.draw();
  }

  drawEverything() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.draw();
    this.player.draw();
    this.treasure.draw();
  }

}


