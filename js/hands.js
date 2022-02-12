class Hands {
  constructor() {
    // =========================================================================
    //    CLASS Hands PROPERTIES
    // =========================================================================

    this.x = canvas.width / 2 - 50;
    this.y = canvas.height - 100;
    this.width = 100;
    this.height = 100;
    this.img = new Image();
    this.img.src = "./img/hands.png";
  }

  // ===========================================================================
  //    CLASS Hands METHODS
  // ===========================================================================

  // display the hands
  drawHands = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };


  // move the hands
  moveHands = (keyName) => {
    switch (keyName) {
      case "ArrowUp":
        this.y = this.y - 20;
        break;

      case "ArrowDown":
        this.y = this.y + 20;
        break;

      case "ArrowLeft":
        this.x = this.x - 20;
        break;

      case "ArrowRight":
        this.x = this.x + 20;
        break;
    }
  };
}
