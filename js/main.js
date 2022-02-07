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

// control variables
let gameLoopControlVar = 0;

// game variables
let newGame;

// objects variables
let answerPositionx = 50;
let answerPositionY = 50;
let handsSizeH = 100;
let handsSizeW = 100;

// screens variables
let screenCanvasDOM = document.querySelector("#screen-canvas");
let screenGameOverDOM = document.querySelector("#screen-gameover");
let screenSplashDOM = document.querySelector("#screen-splash");

// department, level, questions and answers variables
let department;
let level;
let questionsAnswers;
let answers = 0;

// =============================================================================
//    STATE MANAGEMENT FUNCTIONS
// =============================================================================

// function to set the department for the questions to ask
const setDepartment = (departmentParam) => {
  department = departmentParam.toLowerCase();
  return department;
};

const setLevel = (levelParam) => {
  level = levelParam;
  return level;
};

// function to start game
const startGame = () => {
  // verify if the candidate selected the
  if (department === "js" || department === "html" || department === "css") {
    swapScreen(screenSplashDOM, screenCanvasDOM);
    console.log(department + level);

    // iniciar el juego
    // newGame = new Game()
    gameLoop();
  } else {
    alert("To apply for a job, you need to decide a department first!");
  }
};

// function to swap the game screens by adding or removing the "hidden" class
const swapScreen = (elementToHide, elementToShow) => {
  // if the elementToHide is screenSplashDOM, replace:
  // - class screen-canvas by screen-canvas-level-1
  if (elementToHide === screenSplashDOM) {
    // hide elementToHide
    elementToHide.classList.add("hidden");

    // display elementToShow
    elementToShow.classList.remove("hidden");

    // set format
    elementToShow.classList.replace("screen-canvas", "screen-canvas-level-1");
  } else if (elementToHide === screenCanvasDOM) {
    // if elementToHide is screenCanvasDOM and candidate finished level 1
    // (has more than 60% correct answers)

    // - switch screen-canvas-level-1 to screen-canvas-level-2
    if (elementToShow.classList.contains("screen-canvas-level-1")) {
      elementToShow.classList.replace(
        "screen-canvas-level-1",
        "screen-canvas-level-2"
      );
    }
  }
};

const gameLoop = () => {
  gameLoopControlVar++;

  // testing code
  if (gameLoopControlVar <= 5) {
    requestAnimationFrame(gameLoop);
    console.log("Testing recursion!");
  }
  /* production code
  if (gameLoopControlVar <= canvas.height-(handsSizeH+(answerSizeH*2))) {
    requestAnimationFrame(gameLoop);
  }
  */
};

// =============================================================================
//    ADD EVENT LISTENERS
// =============================================================================

btnDepartmentJsDOM.addEventListener("click", () => {
  setDepartment("JS");
  // console.log(department)
});

btnDepartmentHtmlDOM.addEventListener("click", () => {
  setDepartment("HTML");
  // console.log(department)
});

btnDepartmentCssDOM.addEventListener("click", () => {
  setDepartment("CSS");
  // console.log(department)
});

btnLevelJuniorDOM.addEventListener("click", () => {
  level = "Junior";
  startGame();
});

btnLevelMiddleDOM.addEventListener("click", () => {
  level = "Middle";
  startGame();
});

btnLevelSeniorDOM.addEventListener("click", () => {
  level = "Senior";
  startGame();
});

btnRestartDOM.addEventListener("click", () => {
  swapScreen(screenGameOverDOM, screenSplashDOM);
});
