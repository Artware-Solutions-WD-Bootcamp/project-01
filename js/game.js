class Game {
  // =========================================================================
  //    CLASS Game PROPERTIES
  // =========================================================================
  constructor() {
    this.answers = new Answer();
    this.hands = new Hands();
    this.questionSet = new Question();
  }

  // ===========================================================================
  //    CLASS Game METHODS
  // ===========================================================================

  // clear canvas
  clearCanvas = () => {
    canvas.width = canvas.width;
  };

  // function to build next question set
  nextQuestionSet = () => {
    fillQuestionsAnswers(roundQuestionSetObjArr, roundQuestionSetIndex);
    this.answers = new Answer();
    this.hands = new Hands();
    this.questionSet = new Question();
  };

  updateRoundInfoExceptLastRoundOnLevel = () => {
    // push round info to array
    roundAnswersArray.push({roundIndex: roundIndex, roundSolution: this.roundSolution, answered: this.answerToCheck});
    // increment the questions counter to show the next question set
    roundQuestionSetIndex++;
    // obtain the new question set
    this.nextQuestionSet();
  }

  // core function: checks if:
    // answers are correct or not
    // 
  checkHandsAnswerCollision = (eachAnswerParam) => {
    if (
      this.hands.x < eachAnswerParam.x + eachAnswerParam.width &&
      this.hands.x + this.hands.width > eachAnswerParam.x &&
      this.hands.y < eachAnswerParam.y + eachAnswerParam.height &&
      this.hands.height + this.hands.y > eachAnswerParam.y
    ) {
      // if collision detected:
      // 1. check if iteration counter is <= 4
      if (roundQuestionSetIndex <= 4) {
        this.roundSolution =
          roundQuestionSetObjArr[roundQuestionSetIndex].solution;
        this.answerToCheck = this.answers.answersArr.indexOf(eachAnswerParam);
        // on each question round except last (<5 index 4)
        if (roundQuestionSetIndex < 4) {
          // if answer is ok
          if (this.roundSolution === this.answerToCheck) {
            // push round info to array
            roundAnswersArray.push({
              roundIndex: roundIndex,
              roundSolution: this.roundSolution,
              answered: this.answerToCheck,
            });
            // increment the correct answers counter
            correctRoundAnswerCounter++;
            // increment the questions counter to show the next question set
            roundQuestionSetIndex++;
            // obtain the new question set
            this.nextQuestionSet();

            // if answer is not ok
          } else {
            // push round info to array
            roundAnswersArray.push({
              roundIndex: roundIndex,
              roundSolution: this.roundSolution,
              answered: this.answerToCheck,
            });
            // increment the questions counter to show the next question set
            roundQuestionSetIndex++;
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
            roundAnswersArray.push({
              roundIndex: roundIndex,
              roundSolution: this.roundSolution,
              answered: this.answerToCheck,
            });
            // increment the correct answers counter to show a feedback to the candidate
            roundQuestionSetIndex = 0;
            // set newQuestionSet to true
            // increment the index round
            roundIndex++;

            if (roundIndex < 2) {
              // if game is on round 1
              correctRoundAnswerCounter++;
              // set first round correct answers
              firstRoundCorrectAnswers = correctRoundAnswerCounter;
              // give feedback to candidate
              alert(
                `¡FELICIDADES!
                Ha contestado correctamente a ${correctRoundAnswerCounter} preguntas.
                ¡Puede continuar!`
              );
              // reset the question set index counter to obtain the new first question
              newQuestionSet = true;
              // obtain a new question set for the next round
              getQuestionSet(department, jobLevel, roundIndex);
              // obtain the new question set
              this.nextQuestionSet();
              // set the correctRoundAnswerCounter to 0
              correctRoundAnswerCounter = 0;
              // swap the screen to the new look
              swapScreen(screenGameDOM, screenGameDOM);
            } else {
              // if game is on round 2
              // finish the game loop execution
              isGameOver = true;
              // swap the screen to end gameover screen
              swapScreen(screenGameDOM, screenGameOverDOM);
            }

            // if answer is not ok
          } else {
            // push round info to array
            roundAnswersArray.push({
              roundIndex: roundIndex,
              roundSolution: this.roundSolution,
              answered: this.answerToCheck,
            });
            // increment the questions counter to show the next question set
            roundQuestionSetIndex++;
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
    });

    // 3. draw elements
    this.answers.drawAnswer();
    this.hands.drawHands();

    // 4. animation recursion
    // if the first answer ball arrives at the bottom of the canvas
    // means that the time to answer has ended and the candidate
    // should improve his skills
    if (
      this.answers.answersArr[0].y >= canvas.height - 100 ||
      this.answers.answersArr[1].y >= canvas.height - 100 ||
      this.answers.answersArr[2].y >= canvas.height - 100 ||
      this.answers.answersArr[3].y >= canvas.height - 100 ||
      isGameOver === true
    ) {
      // end the game
      isGameOver = true;

      // show gameover screen
      swapScreen(screenGameDOM, screenGameOverDOM);
    } else {
      this.answers.answersArr[0].y += this.answers.answer1MovementSpeed;
      this.answers.answersArr[1].y += this.answers.answer2MovementSpeed;
      this.answers.answersArr[2].y += this.answers.answer3MovementSpeed;
      this.answers.answersArr[3].y += this.answers.answer4MovementSpeed;
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
