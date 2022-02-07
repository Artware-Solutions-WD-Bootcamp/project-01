class Hands {
  constructor() {
    // hands properties
    this.x = canvasDOM.width / 2;
    this.y = canvasDOM.height / 2;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    this.img.src = "./images/hands.png";
    this.gravitySpeed = 2;
    this.jumpSpeedMultiplier = 10;
    this.jumpSpeed = this.gravitySpeed * this.jumpSpeedMultiplier;
  }

    // we need to see the hands
    drawHands = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  
  




}
