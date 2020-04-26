class Background {
  contructor($canvas, context) {
    this.canvas = $canvas;
    this.context = context;
  };
  
  draw() {
    //console.log($canvas);
    const height = $canvas.height;
    const width = $canvas.width;
    //console.log(this.canvas.width, this.canvas.height);

    // TODO: write the code of the function
    context.beginPath();
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {  
          //console.log(row,col) ;
          context.rect(row * ( width / 10 ), col * ( height / 10 ), width, height);
          context.stroke(); 
        }
      }
  };

}


