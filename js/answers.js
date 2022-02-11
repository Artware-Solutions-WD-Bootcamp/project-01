class Answers {
  constructor() {
    // =========================================================================
    //    CLASS Answers PROPERTIES
    // =========================================================================

    // common properties
    this.height = 100;
    this.width = 100;
    this.defaultSpeed = 1.5;

    // answer1 properties
    this.answer1X = 50;
    this.answer1Y = -50;
    this.answer1 = new Image();
    this.answer1.src = "img/answer0.png";
    this.answer1MovementSpeed = this.defaultSpeed * Math.random();

    // answer2 properties
    this.answer2X = 175;
    this.answer2Y = -50;
    this.answer2 = new Image();
    this.answer2.src = "img/answer1.png";
    this.answer2MovementSpeed = this.defaultSpeed * Math.random();

    // answer3 properties
    this.answer3X = 300;
    this.answer3Y = -50;
    this.answer3 = new Image();
    this.answer3.src = "img/answer2.png";
    this.answer3MovementSpeed = this.defaultSpeed * Math.random();

    // answer4 properties
    this.answer4X = 425;
    this.answer4Y = -50;
    this.answer4 = new Image();
    this.answer4.src = "img/answer3.png";
    this.answer4MovementSpeed = this.defaultSpeed * Math.random();

    this.answersArr = [
      { x: this.answer1X, y: 0, height: this.height, width: this.width },
      { x: this.answer2X, y: 0, height: this.height, width: this.width },
      { x: this.answer3X, y: 0, height: this.height, width: this.width },
      { x: this.answer4X, y: 0, height: this.height, width: this.width },
    ];
  }

  // ===========================================================================
  //    CLASS Answers METHODS
  // ===========================================================================

  // draw answer
  drawAnswer = () => {
    ctx.drawImage(
      this.answer1,
      this.answer1X,
      this.answer1Y,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.answer2,
      this.answer2X,
      this.answer2Y,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.answer3,
      this.answer3X,
      this.answer3Y,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.answer4,
      this.answer4X,
      this.answer4Y,
      this.width,
      this.height
    );
  };

  // move answer
  moveAnswer = () => {
    this.answer1Y = this.answer1Y + this.answer1MovementSpeed;
    this.answer2Y = this.answer2Y + this.answer2MovementSpeed;
    this.answer3Y = this.answer3Y + this.answer3MovementSpeed;
    this.answer4Y = this.answer4Y + this.answer4MovementSpeed;
  };

  // ===========================================================================
  //    CLASS Answers ADD EVENT LISTENERS
  // ===========================================================================
}
