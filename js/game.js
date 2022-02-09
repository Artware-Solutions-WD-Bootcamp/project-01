class Game {
  constructor() {
    // game properties
    this.answer = new Answer();
    this.hands = new Hands();
    this.newQuestionsArr = [];
    //this.isGameOver = false;
  }

  // clear canvas
  clearCanvas = () => {
    canvas.width = canvas.width;
    // console.log("Canvas cleared!");
  };

  // game methods
  gameLoop = () => {
    gameLoopControlVar++; // declarado en main.js => control variables
    // console.log(`gameLoop() gameLoopControlVar: ${gameLoopControlVar}`);

    // 1. clear canvas
    this.clearCanvas();

    // 2. move elements and/or other actions
    this.answer.moveAnswer();

    // 3. draw elements
    this.answer.drawAnswer();
    this.hands.drawHands();

    // 4. animation recursion

    if (
      this.answer.answer1Y >= 800 ||
      this.answer.answer2Y >= 800 ||
      this.answer.answer3Y >= 800 ||
      this.answer.answer4Y >= 800
    ) {
      isGameOver = true;
      console.log(isGameOver)
      swapScreen(screenCanvasDOM, screenCanvasDOM);
      //console.log("BOOOOOOOM!");
    } else {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  newGame.hands.moveHands(keyName);
});
