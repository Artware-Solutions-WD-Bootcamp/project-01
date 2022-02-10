// =============================================================================
//    GLOBAL VARIABLES
// =============================================================================

// buttons
let btnDepartmentHtmlDOM = document.querySelector("#btn-html");
let btnDepartmentCssDOM = document.querySelector("#btn-css");
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
let newGame;
let newQuestionSet = false;
let isGameOver = false;

// objects variables
let answerSrcParam = 0;

// screens variables
let screenCanvasDOM = document.querySelector("#screen-canvas");
let screenGameOverDOM = document.querySelector("#screen-gameover");
let screenSplashDOM = document.querySelector("#screen-splash");

// department, level, questions and answers variables
let department = "";
let level = "";
let searchQuestionsFilter = "";
let gameQuestionSetObjArr;
let gameQuestionSetIndex = 0;
let roundIndex = 0;
let correctRoundSolution = 0;
let correctRoundAnswerCounter = 0;
let roundAnswersArray = [];
let gameAnswersarray = [];

// =============================================================================
//    STATE MANAGEMENT FUNCTIONS
// =============================================================================

// function to set the department for the questions to ask
const setDepartment = (departmentParam) => {
  department = departmentParam.toLowerCase();
  return department;
};

// function to set the level for the questions to ask
const setLevel = (levelParam) => {
  level = levelParam[0].toUpperCase() + levelParam.slice(1).toLowerCase();
  return level;
};

const getQuestionSet = (department, level, roundIndex) => {
  searchQuestionsFilter = department + level;
  console.log(`getQuestionSet roundIndex ${roundIndex}`)
  // console.log(`getQuestionSetFilter(): "${searchQuestionsFilter}"`)

  let newQuestions = new Questions();
  let gameQuestionSetObjArr = newQuestions.setQuestionSet(
    searchQuestionsFilter
  );

  // console.log(`getQuestionSet() gameQuestionSetObjArr: ${gameQuestionSetObjArr[0].question}`);
  return gameQuestionSetObjArr;
};

const fillQuestionsAnswers = (gameQuestionSetObjArr, gameQuestionSetIndex) => {
  if (newGame) {
    let questionDOM = document.querySelector("#question");
    questionDOM.innerText =
      gameQuestionSetObjArr[gameQuestionSetIndex].question;

    let answer1DOM = document.querySelector("#answer1");
    answer1DOM.innerText =
      gameQuestionSetObjArr[gameQuestionSetIndex].answer[0];

    let answer2DOM = document.querySelector("#answer2");
    answer2DOM.innerText =
      gameQuestionSetObjArr[gameQuestionSetIndex].answer[1];

    let answer3DOM = document.querySelector("#answer3");
    answer3DOM.innerText =
      gameQuestionSetObjArr[gameQuestionSetIndex].answer[2];

    let answer4DOM = document.querySelector("#answer4");
    answer4DOM.innerText =
      gameQuestionSetObjArr[gameQuestionSetIndex].answer[3];

    correctRoundSolution = gameQuestionSetObjArr[gameQuestionSetIndex].solution;
    return correctRoundSolution;
  }
};

// function to start game
const startGame = () => {
  // verify if the candidate selected the
  if (department === "js" || department === "html" || department === "css") {
    swapScreen(screenSplashDOM, screenCanvasDOM);
    // console.log(`startGame() selected department and level are: ${department + level}`);

    // start new game
    newGame = new Game();
    newGame.gameLoop();
  } else {
    alert("To apply for a job, you need to decide a department first!");
  }

  // obtain the questions and answers objects array to populate game screen
  getQuestionSet(department, level, roundIndex);
  // console.log(getQuestionSet);

  fillQuestionsAnswers(gameQuestionSetObjArr, gameQuestionSetIndex);
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

  if (elementToShow === screenGameOverDOM) {
    if (correctRoundAnswerCounter < 2) {
      btnRestartDOM.innerText = "Volver a intentar"
      elementToShow.classList.replace("screen-gameover", "screen-gameover-lose");
      screenCanvasDOM.classList.remove("screen-canvas-level-1")
      screenCanvasDOM.classList.remove("screen-canvas-level-2")
      screenCanvasDOM.classList.add("screen-canvas-level-1")
    } else {
      btnRestartDOM.innerText = "Mejorar mi salario"
      elementToShow.classList.replace("screen-gameover", "screen-gameover-win");
      screenCanvasDOM.classList.remove("screen-canvas-level-1")
      screenCanvasDOM.classList.remove("screen-canvas-level-2")
      screenCanvasDOM.classList.add("screen-canvas-level-1")
    }
  }
};


// =============================================================================
//    ADD EVENT LISTENERS
// =============================================================================

btnDepartmentJsDOM.addEventListener("click", () => {
  setDepartment("JS");
  // console.log(`setDepartment() selected department: "${department}"`)
});

btnDepartmentHtmlDOM.addEventListener("click", () => {
  setDepartment("HTML");
  // console.log(`setDepartment() selected department: "${department}"`)
});

btnDepartmentCssDOM.addEventListener("click", () => {
  setDepartment("CSS");
  // console.log(`setDepartment() selected department: "${department}"`)
});

btnLevelJuniorDOM.addEventListener("click", () => {
  setLevel("JUNIOR");
  // console.log(`setLevel() selected level is: "${level}"`)
  startGame();
});

btnLevelMiddleDOM.addEventListener("click", () => {
  setLevel("middle");
  // console.log(`setLevel() selected level is: "${level}"`)
  startGame();
});

btnLevelSeniorDOM.addEventListener("click", () => {
  setLevel("seNIor");
  // console.log(`setLevel() selected level is: "${level}"`)
  startGame();
});

btnRestartDOM.addEventListener("click", () => {
  isGameOver = false;
  swapScreen(screenGameOverDOM, screenSplashDOM);
  roundIndex = 0;
  correctRoundSolution = 0;
  correctRoundAnswerCounter = 0;
});
