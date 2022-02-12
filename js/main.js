// =============================================================================
//    GLOBAL VARIABLES
// =============================================================================

// buttons
let btnDepartmentCssDOM = document.querySelector("#btn-css");
let btnDepartmentHtmlDOM = document.querySelector("#btn-html");
let btnDepartmentJsDOM = document.querySelector("#btn-js");
let btnLevelJuniorDOM = document.querySelector("#btn-junior");
let btnLevelMiddleDOM = document.querySelector("#btn-middle");
let btnLevelSeniorDOM = document.querySelector("#btn-senior");
let btnRestartDOM = document.querySelector("#btn-restart");

// canvas
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
canvas.style.backgroundColor = "gray";
canvas.style.opacity = "60%";
canvas.width = 600;
canvas.height = 900;

// game variables
let isGameOver = false;
let newGame;
let newQuestionSet = false;

// screens variables
let screenGameDOM = document.querySelector("#screen-canvas");
let screenGameOverDOM = document.querySelector("#screen-gameover");
let screenSplashDOM = document.querySelector("#screen-splash");

// department, jobLevel, questions and answers variables
let correctRoundSolution = 0;
let correctRoundAnswerCounter = 0;
let department = "";
let gameInfoAnswersArray = [];
let gameInfoLevel = 0;
let firstRoundCorrectAnswers = 0;
let jobLevel = "";
let roundIndex = 0;
let roundAnswersArray = [];
let roundQuestionSetObjArr;
let roundQuestionSetIndex = 0;
let secondRoundCorrectAnswers = 0;

// =============================================================================
//    STATE MANAGEMENT FUNCTIONS
// =============================================================================

// function to set the department for the questions to ask
const setDepartment = (departmentParam) => {
  department = departmentParam.toLowerCase();
  return department;
};

// function to set the jobLevel for the questions to ask
const setJobLevel = (jobLevelParam) => {
  jobLevel = jobLevelParam[0].toUpperCase() + jobLevelParam.slice(1).toLowerCase();
  return jobLevel;
};

// function to get the question/answers set
const getQuestionSet = (department, jobLevel) => {
  let newQuestion = new Question();
  let searchQuestionFilter = department + jobLevel;
  let roundQuestionSetObjArr = newQuestion.setQuestionSet(searchQuestionFilter);

  return roundQuestionSetObjArr;
};

// function to fill the question/answer section
const fillQuestionsAnswers = (roundQuestionSetObjArr, roundQuestionSetIndex) => {
  if (newGame) {
    let questionDOM = document.querySelector("#question");
    questionDOM.innerText =
      roundQuestionSetObjArr[roundQuestionSetIndex].question;

    let answer1DOM = document.querySelector("#answer1");
    answer1DOM.innerText =
      roundQuestionSetObjArr[roundQuestionSetIndex].answer[0];

    let answer2DOM = document.querySelector("#answer2");
    answer2DOM.innerText =
      roundQuestionSetObjArr[roundQuestionSetIndex].answer[1];

    let answer3DOM = document.querySelector("#answer3");
    answer3DOM.innerText =
      roundQuestionSetObjArr[roundQuestionSetIndex].answer[2];

    let answer4DOM = document.querySelector("#answer4");
    answer4DOM.innerText =
      roundQuestionSetObjArr[roundQuestionSetIndex].answer[3];

    correctRoundSolution = roundQuestionSetObjArr[roundQuestionSetIndex].solution;
    return correctRoundSolution;
  }
};

// function to start game
const startGame = () => {
  // verify if the candidate selected the department first
  if (department === "js" || department === "html" || department === "css") {
    // swap initial screen with game screen
    swapScreen(screenSplashDOM, screenGameDOM);

    // start new game
    newGame = new Game();
    newGame.gameLoop();
  } else {
    alert(
      "¡Para solicitar un puesto de trabajo, primero tiene que decidir el departamento!"
    );
  }

  // obtain the questions and answers objects array to populate game screen
  getQuestionSet(department, jobLevel);

  // fill the questions and answers
  fillQuestionsAnswers(roundQuestionSetObjArr, roundQuestionSetIndex);
};

// function to swap the game screens by adding or removing the "hidden" class
const swapScreen = (elementToHide, elementToShow) => {
  if (elementToHide === elementToShow) {
    // if both elements are the same, this means that we are in playing game phase
    // so we will only change the class from screen-canvas-level-1 to screen-canvas-level-2
    elementToShow.classList.replace(
      "screen-canvas-level-1",
      "screen-canvas-level-2"
    );
  } else {
    // if elements are different, this means that we are not in playing game phase
    // so we will hide the elementToHide and show elementToShow
    elementToHide.classList.add("hidden");
    elementToShow.classList.remove("hidden");
  }

  // if the element is the gameover screen, set the elements according to result state
  if (elementToShow === screenGameOverDOM) {
    if (correctRoundAnswerCounter < 2) {
      btnRestartDOM.innerText = "Volver a intentar";
      elementToShow.classList.replace(
        "screen-gameover",
        "screen-gameover-lose"
      );
      screenGameDOM.classList.remove("screen-canvas-level-1");
      screenGameDOM.classList.remove("screen-canvas-level-2");
      screenGameDOM.classList.add("screen-canvas-level-1");
    } else {
      btnRestartDOM.innerText = "Mejorar mi salario";
      elementToShow.classList.replace("screen-gameover", "screen-gameover-win");
      screenGameDOM.classList.remove("screen-canvas-level-1");
      screenGameDOM.classList.remove("screen-canvas-level-2");
      screenGameDOM.classList.add("screen-canvas-level-1");
    }
  }
};

// function to restart game
const restartGame = () => {
  isGameOver = false;
  swapScreen(screenGameOverDOM, screenSplashDOM);
  roundIndex = 0;
  correctRoundSolution = 0;
  correctRoundAnswerCounter = 0;
};

// =============================================================================
//    ADD EVENT LISTENERS
// =============================================================================

// set JS department
btnDepartmentJsDOM.addEventListener("click", () => {
  setDepartment("JS");
});

// set HTML department
btnDepartmentHtmlDOM.addEventListener("click", () => {
  setDepartment("HTML");
});

// set CSS department
btnDepartmentCssDOM.addEventListener("click", () => {
  setDepartment("CSS");
});

// set Junior jobLevel
btnLevelJuniorDOM.addEventListener("click", () => {
  setJobLevel("JUNIOR");
  startGame();
});

// set Middle jobLevel
btnLevelMiddleDOM.addEventListener("click", () => {
  setJobLevel("MIDDLE");
  startGame();
});

// set Senior jobLevel
btnLevelSeniorDOM.addEventListener("click", () => {
  setJobLevel("SENIOR");
  startGame();
});

// restart game button
btnRestartDOM.addEventListener("click", () => {
  restartGame();
});
