class Hands {
  constructor() {
    this.handsX = canvas.width / 2 - 50;
    this.handsY = canvas.height - 100;
    this.width = 100;
    this.height = 100;
    this.img = new Image();
    this.img.src = "img/hands.png";
    //this.gravityNormalSpeed = 1;
    //this.gravitySpeedMultiplier = 10;
    //this.gravitySpeed = this.gravityNormalSpeed * this.gravitySpeedMultiplier;
  }

  // display the hands
  drawHands = () => {
    ctx.drawImage(this.img, this.handsX, this.handsY, this.width, this.height);
  };

  // move the hands
  moveHands = (keyName) => {
    switch (keyName) {
      case "ArrowUp":
        this.handsY = this.handsY - 20;
        console.log(`This handsY: ${this.handsY}`);
        // console.log(`pulsado la tecla ${keyName}`);
        break;
        
        case "ArrowDown":
          this.handsY = this.handsY + 20;
          console.log(`This handsY: ${this.handsY}`);
          // console.log(`Ha pulsado la tecla ${keyName}`);
        break;
        
        case "ArrowLeft":
        this.handsX = this.handsX - 20;
        console.log(`This handsX: ${this.handsX}`);
        // console.log(`Ha pulsado la tecla ${keyName}`);
        break;
        
        case "ArrowRight":
        this.handsX = this.handsX + 20;
        console.log(`This handsX: ${this.handsX}`);
        // console.log(`Ha pulsado la tecla ${keyName}`);
        break;
    }

    // alert('keydown event\n\n' + 'key: ' + keyName);
  };
}
