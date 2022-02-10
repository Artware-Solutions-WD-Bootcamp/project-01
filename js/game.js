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
        this.roundSolution = gameQuestionSetObjArr[gameQuestionSetIndex].solution;
        this.answerToCheck = this.answers.answersArr.indexOf(eachAnswerParam);
        // on each question round except last (<5 index 4)
        if (gameQuestionSetIndex < 4) {
          // if answer is ok
          if (this.roundSolution === this.answerToCheck) {
            // push round info to array
            roundAnswersArray.push({ roundIndex: roundIndex, roundSolution: this.roundSolution, answered: this.answerToCheck,});
            // increment the correct answers counter
            correctRoundAnswerCounter++;
            // increment the questions counter to show the next question set
            gameQuestionSetIndex++
            // obtain the new question set
            this.nextQuestionSet();

            // if answer is not ok
          } else {
            // push round info to array
            roundAnswersArray.push({ roundIndex: roundIndex, roundSolution: this.roundSolution, answered: this.answerToCheck,});
            // increment the questions counter to show the next question set
            gameQuestionSetIndex++
            // obtain the new question set
            this.nextQuestionSet();
          }

        // on the last question we need to apply a different logic
        // we will also need to check if the candidate met the minimum needed knowledge
        // to know if he will pass to the next round or he will lose the interview
        } else {
          // if answer is ok
          if (this.roundSolution === this.answerToCheck) {
            // push round info to array
            roundAnswersArray.push({ roundIndex: roundIndex, roundSolution: this.roundSolution, answered: this.answerToCheck,});
            // increment the correct answers counter to show a feedback to the candidate
            gameQuestionSetIndex = 0;
            console.log(`collision check gameQuestionSetIndex: ${gameQuestionSetIndex}`)
            // set newQuestionSet to true
            // increment the index round
            roundIndex++;
            console.log(`collision check roundIndex: ${roundIndex}`)

            if(roundIndex<2){
              // if game is on round 1
              correctRoundAnswerCounter++;
              // give feedback to candidate
              alert(`Congratulations! You had ${correctRoundAnswerCounter} correct answers! You can continue!`);
              // reset the question set index counter to obtain the new first question
              newQuestionSet = true;
              // obtain a new question set for the next round
              getQuestionSet(department, level, roundIndex);
              // obtain the new question set
              this.nextQuestionSet();
              // set the correctRoundAnswerCounter to 0 
              correctRoundAnswerCounter=0;
              // swap the screen to the new look
              swapScreen(screenCanvasDOM, screenCanvasDOM);
            } else {
              // if game is on round 2
              // finish the game loop execution
              isGameOver = true
              // swap the screen to end gameover screen
              swapScreen(screenCanvasDOM, screenGameOverDOM);
            }

            // if answer is not ok
          } else {
            // push round info to array
            roundAnswersArray.push({ roundIndex: roundIndex, roundSolution: this.roundSolution, answered: this.answerToCheck,});
            // increment the questions counter to show the next question set
            gameQuestionSetIndex++
            // obtain the new question set
            this.nextQuestionSet();
          }
        }
      }
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
      // show gameover screen
      isGameOver = true
      // console.log(isGameOver)
      swapScreen(screenCanvasDOM, screenGameOverDOM);
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
