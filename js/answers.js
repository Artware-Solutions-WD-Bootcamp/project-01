class Answer {
  constructor() {
    // common properties
    this.answerHeight = 100;
    this.answerWidth = 100;

    // answer1 properties
    this.answer1X = 50;
    this.answer1Y = 0;
    this.answer1 = new Image();
    this.answer1.src = "img/answer0.png";
    this.answer1DefaultMovementSpeed = 1;
    this.answer1MovementSpeedMultiplier = 2;
    this.answer1MovementSpeed = this.answer1DefaultMovementSpeed * this.answer1MovementSpeedMultiplier;
    
    // answer2 properties
    this.answer2X = 175;
    this.answer2Y = 0;
    this.answer2 = new Image();
    this.answer2.src = "img/answer1.png";
    this.answer2DefaultMovementSpeed = 1;
    this.answer2MovementSpeedMultiplier = 1.5;
    this.answer2MovementSpeed = this.answer2DefaultMovementSpeed * this.answer2MovementSpeedMultiplier;
    
    // answer3 properties
    this.answer3X = 300;
    this.answer3Y = 0;
    this.answer3 = new Image();
    this.answer3.src = "img/answer2.png";
    this.answer3DefaultMovementSpeed = 1;
    this.answer3MovementSpeedMultiplier = 3;
    this.answer3MovementSpeed = this.answer3DefaultMovementSpeed * this.answer3MovementSpeedMultiplier;
    
    // answer4 properties
    this.answer4X = 425;
    this.answer4Y = 0;
    this.answer4 = new Image();
    this.answer4.src = "img/answer3.png";
    this.answer4DefaultMovementSpeed = 2;
    this.answer4MovementSpeedMultiplier = 2;
    this.answer4MovementSpeed = this.answer4DefaultMovementSpeed * this.answer4MovementSpeedMultiplier;
  }

  // answer actions

  // draw answer
  drawAnswer = () => {
    ctx.drawImage(this.answer1, this.answer1X, this.answer1Y, this.answerWidth, this.answerHeight);
    ctx.drawImage(this.answer2, this.answer2X, this.answer2Y, this.answerWidth, this.answerHeight);
    ctx.drawImage(this.answer3, this.answer3X, this.answer3Y, this.answerWidth, this.answerHeight);
    ctx.drawImage(this.answer4, this.answer4X, this.answer4Y, this.answerWidth, this.answerHeight);
  };

  // move answer
  moveAnswer = () => {
    this.answer1Y = this.answer1Y + this.answer1MovementSpeed
    this.answer2Y = this.answer2Y + this.answer2MovementSpeed
    this.answer3Y = this.answer3Y + this.answer3MovementSpeed
    this.answer4Y = this.answer4Y + this.answer4MovementSpeed
  };
}
