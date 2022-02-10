class Game {
  // =========================================================================
  //    CLASS Game PROPERTIES
  // =========================================================================
  constructor() {
    this.answers = new Answers();
    this.hands = new Hands();
    this.questionSet = new Questions();
  }

  // ===========================================================================
  //    CLASS Game METHODS
  // ===========================================================================

  // clear canvas
  clearCanvas = () => {
    canvas.width = canvas.width;
    // console.log("Canvas cleared!");
  };

  nextQuestionSet = () => {
    fillQuestionsAnswers(gameQuestionSetObjArr, gameQuestionSetIndex);
    this.answers = new Answers();
    this.hands = new Hands();
    this.questionSet = new Questions();
  };

  checkHandsAnswerCollision = (eachAnswerParam) => {
    if (
      this.hands.x < eachAnswerParam.x + eachAnswerParam.width &&
      this.hands.x + this.hands.width > eachAnswerParam.x &&
      this.hands.y < eachAnswerParam.y + eachAnswerParam.height &&
      this.hands.height + this.hands.y > eachAnswerParam.y
    ) {
      // if collision detected:
      // 1. check if iteration counter is <= 4
      if (gameQuestionSetIndex <= 4) {
        //    - check if the answer is correct or not
        this.roundSolution =
          gameQuestionSetObjArr[gameQuestionSetIndex].solution;
        this.answerToCheck = this.answers.answersArr.indexOf(eachAnswerParam);
        if (this.roundSolution === this.answerToCheck) {
          console.log("Yeeepeee!");
          if (gameQuestionSetIndex < 4) {
            roundAnswersArray.push({
              roundIndex: roundIndex,
              roundSolution: this.roundSolution,
              answered: this.answerToCheck,
            });
            gameQuestionSetIndex++;
            correctRoundAnswerCounter++;
            this.nextQuestionSet();
          } else if (gameQuestionSetIndex === 4) {
            roundAnswersArray.push({
              roundIndex: roundIndex,
              roundSolution: this.roundSolution,
              answered: this.answerToCheck,
            });
            if (correctRoundAnswerCounter < 2) {
              console.log(
                `We are sorry, you had ${correctRoundAnswerCounter} correct answers! However, you can try again!`
              );
              //correctRoundAnswerCounter++;
              newQuestionSet = false;
            } else {
              correctRoundAnswerCounter++;
              newQuestionSet = true;
              console.log(
                `Congratulations! You had ${correctRoundAnswerCounter} correct answers! Continue!`
              );
            }
            isGameOver = true;
            gameQuestionSetIndex = 0;
            correctRoundAnswerCounter = 0;
          }
        } else {
          console.log("Mhhhh");
          if (gameQuestionSetIndex < 4) {
            roundAnswersArray.push({
              roundIndex: roundIndex,
              roundSolution: this.roundSolution,
              answered: this.answerToCheck,
            });
            gameQuestionSetIndex++;
            this.nextQuestionSet();
          } else if (gameQuestionSetIndex === 4) {
            roundAnswersArray.push({
              roundIndex: roundIndex,
              roundSolution: this.roundSolution,
              answered: this.answerToCheck,
            });
            if (correctRoundAnswerCounter < 2) {
              console.log(
                `We are sorry, you had ${correctRoundAnswerCounter} correct answers! However, you can try again!`
              );
              isGameOver = true;
            } else {
              newQuestionSet = true;
              console.log(
                `Congratulations! You had ${correctRoundAnswerCounter} correct answers! Continue!`
              );
            }
            newQuestionSet++;
            gameQuestionSetIndex = 0;
            correctRoundAnswerCounter = 0;
          }
        }
        // console.log(`correctRoundAnswerCounter: ${correctRoundAnswerCounter}`);
        // console.log(`roundAnswersArray: ${roundAnswersArray}`);
        // console.log(`gameQuestionSetIndex: ${this.roundSolution}`);
      }
      //    - if >3 AND <5 check correct answer counter
      //      -
      //
      // 1. check correct answer counter
      //    - if is <3
      //    - if is <5 set the new question/answers set and restart the loop
      //    - if is = to 5 AND the
      // 2.

      // end game
      // 1. end the loop
      //isGameOver = true;
      // console.log("Ouch!");
      // console.log(`game.js -> gameQuestionSetIndex: ${gameQuestionSetObjArr}`)
      // console.log(`game.js -> gameQuestionSetIndex: ${gameQuestionSetIndex}`);

      // 2. change screen
      //swapScreen(elementToHide, elementToShow)
    }
  };

  gameLoop = () => {
    // 1. clear canvas
    this.clearCanvas();

    // 2. move elements and/or other check actions
    this.answers.moveAnswer();
    this.answers.answersArr.forEach((eachAnswer) => {
      // check collision between hands and answer
      this.checkHandsAnswerCollision(eachAnswer);
      // console.log(eachAnswer)
    });

    // 3. draw elements
    this.answers.drawAnswer();
    this.hands.drawHands();

    // 4. animation recursion
    // if the first answer ball arrives at the bottom of the canvas
    // means that the time to answer has ended
    if (
      this.answers.answer1Y >= canvas.height - 100 ||
      this.answers.answer2Y >= canvas.height - 100 ||
      this.answers.answer3Y >= canvas.height - 100 ||
      this.answers.answer4Y >= canvas.height - 100 ||
      isGameOver === true
    ) {
      //isGameOver = true;
      swapScreen(screenCanvasDOM, screenCanvasDOM);
      //console.log(`main.js -> fillQuestionsAnswers() correctSolution: ${correctRoundSolution}`)
      //console.log(`this.answers.answersArr[3].y: ${this.answers.answersArr[3].y}`);
      //console.log(`game.js -> isGameOver: ${isGameOver}`);
    } else {
      // begin block to move to updateCollisionData()
      this.answers.answersArr[0].y =
        this.answers.answer1Y + this.answers.answer1MovementSpeed;
      this.answers.answersArr[1].y =
        this.answers.answer2Y + this.answers.answer2MovementSpeed;
      this.answers.answersArr[2].y =
        this.answers.answer3Y + this.answers.answer3MovementSpeed;
      this.answers.answersArr[3].y =
        this.answers.answer4Y + this.answers.answer4MovementSpeed;

      // end block to move to updateCollisionData()
      requestAnimationFrame(this.gameLoop);
    }
  };
}

// ===========================================================================
//    CLASS Game ADD EVENT LISTENERS
// ===========================================================================

// move hands with the keyboard direction keys
document.addEventListener("keydown", (event) => {
  if (newGame) {
    const keyName = event.key;
    newGame.hands.moveHands(keyName);
  }
});
