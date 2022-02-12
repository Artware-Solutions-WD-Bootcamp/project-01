class Answer {
  constructor() {
    // =========================================================================
    //    CLASS Answer PROPERTIES
    // =========================================================================

    // common properties
    this.height = 100;
    this.width = 100;
    this.x = 0;
    this.y = -50;
    this.separator = this.width * 0.4;
    this.defaultSpeed = 1.5;

    // answer1 properties
    this.answer1 = new Image();
    this.answer1.src = "img/answer0.png";
    this.answer1MovementSpeed = this.defaultSpeed * Math.random();

    // answer2 properties
    this.answer2 = new Image();
    this.answer2.src = "img/answer1.png";
    this.answer2MovementSpeed = this.defaultSpeed * Math.random();

    // answer3 properties
    this.answer3 = new Image();
    this.answer3.src = "img/answer2.png";
    this.answer3MovementSpeed = this.defaultSpeed * Math.random();

    // answer4 properties
    this.answer4 = new Image();
    this.answer4.src = "img/answer3.png";
    this.answer4MovementSpeed = this.defaultSpeed * Math.random();

    this.answersArr = [
      { x: this.x + this.separator, y: this.y, height: this.height, width: this.width },
      { x: this.x + this.width + (this.separator * 2), y: this.y, height: this.height, width: this.width },
      { x: this.x + (this.width * 2) + (this.separator * 3), y: this.y, height: this.height, width: this.width },
      { x: this.x + (this.width * 3) + (this.separator * 4), y: this.y, height: this.height, width: this.width },
    ];
  }

  // ===========================================================================
  //    CLASS Answer METHODS
  // ===========================================================================

  // draw answer
  drawAnswer = () => {
    ctx.drawImage(
      this.answer1,
      this.answersArr[0].x,
      this.answersArr[0].y,
      this.answersArr[0].width,
      this.answersArr[0].height
    );
    ctx.drawImage(
      this.answer2,
      this.answersArr[1].x,
      this.answersArr[1].y,
      this.answersArr[1].width,
      this.answersArr[1].height
    );
    ctx.drawImage(
      this.answer3,
      this.answersArr[2].x,
      this.answersArr[2].y,
      this.answersArr[2].width,
      this.answersArr[2].height
    );
    ctx.drawImage(
      this.answer4,
      this.answersArr[3].x,
      this.answersArr[3].y,
      this.answersArr[3].width,
      this.answersArr[3].height
    );
  };

  // move answer
  moveAnswer = () => {
    this.answersArr[0].y += this.answer1MovementSpeed;
    this.answersArr[1].y += this.answer2MovementSpeed;
    this.answersArr[2].y += this.answer3MovementSpeed;
    this.answersArr[3].y += this.answer4MovementSpeed;
  };
}
