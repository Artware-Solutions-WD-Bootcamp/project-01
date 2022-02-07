class Answer {
  constructor(posXParam = 50, posYParam = 50) {
    this.x = posXParam;
    this.y = posYParam;
    this.answerSizeH = 50;
    this.answerSizeW = 100;
    this.img = new Image();
    this.img.src = srcParam;
    this.answerMovementSpeed = 1;
    this.movementSpeedMultiplier = 0.5;
  }

  drawAnswer = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  moveAnswer = () => {
    this.y = this.y + (this.answerMovementSpeed * movementSpeedMultiplier);
  };
}
