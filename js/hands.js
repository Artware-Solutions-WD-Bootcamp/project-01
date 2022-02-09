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
    //this.gravityNormalSpeed = 1;
    //this.gravitySpeedMultiplier = 10;
    //this.gravitySpeed = this.gravityNormalSpeed * this.gravitySpeedMultiplier;
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
        // console.log(`This y: ${this.y}`);
        // console.log(`pulsado la tecla ${keyName}`);
        break;

      case "ArrowDown":
        this.y = this.y + 20;
        // console.log(`This y: ${this.y}`);
        // console.log(`Ha pulsado la tecla ${keyName}`);
        break;

      case "ArrowLeft":
        this.x = this.x - 20;
        // console.log(`This x: ${this.x}`);
        // console.log(`Ha pulsado la tecla ${keyName}`);
        break;

      case "ArrowRight":
        this.x = this.x + 20;
        // console.log(`This x: ${this.x}`);
        // console.log(`Ha pulsado la tecla ${keyName}`);
        break;
    }
  };

  // ===========================================================================
  //    CLASS Game ADD EVENT LISTENERS
  // ===========================================================================
}
