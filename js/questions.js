class Questions {
  // =========================================================================
  //    CLASS Questions PROPERTIES
  // =========================================================================
  constructor() {
    // css section
    this.cssJunior = [
      {
        question: `¿Qué significa CSS?`,
        answer: [`Hoja de estilos en cascada
        (Cascading Style Sheet)`, `Sintaxis de estilo complejo
        (Complex Style Syntax)`, `Hoja de sonidos completa
        (Complete Sounds Sheet)`, `Comparación Cadena <=> Cadena
        Comparison String <=> String`],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
    ];
    this.cssMiddle = [
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
    ];
    this.cssSenior = [
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
    ];

    //html section
    this.htmlJunior = [
      {
        question: `¿Qué significa HTML?`,
        answer: [`Lenguaje marcado por el hipertipo
        (Hyper type marked language)`, `Lenguaje de marcado de hipertexto
        (Hyper text markup language)`, `Lenguaje de marcas de hipertransacciones
        (Hypertransaction markup language)
        `, `Ninguna de las anteriores
        (None of the above)`],
        solution: 1,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
    ];
    this.htmlMiddle = [
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
    ];
    this.htmlSenior = [
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
    ];

    // js section
    this.jsJunior = [
      {
        question: `¿Qué tipo de lenguaje es JS?`,
        answer: [
          `Asincrono`,
          `Código máquina`,
          `Polimórfico`,
          `Sincrono con comportamientos asíncronos`,
        ],
        solution: 3,
      },
      {
        question: `¿Cómo se definen las variables en JS?`,
        answer: [
          `let nombre : "valor"`,
          `let nombre ? "valor"`,
          `let nombre = "valor"`,
          `let nombre ("valor")`,
        ],
        solution: 2,
      },
      {
        question: `¿Cómo se definen las clases en JS?`,
        answer: [
          `class nombreClase()`,
          `class nombreClase {}`,
          `class nombreClase []`,
          `ninguna de las anteriores`,
        ],
        solution: 1,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
    ];
    this.jsMiddle = [
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
    ];
    this.jsSenior = [
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
      {
        question: `¿?`,
        answer: [``, ``, ``, ``],
        solution: 0,
      },
    ];
  }

  // ===========================================================================
  //    CLASS Questions METHODS
  // ===========================================================================

    // questionSet properties
    setQuestionSet = (questionSetParam) => {
      switch (questionSetParam) {
        case "cssJunior":
          gameQuestionSetObjArr = this.cssJunior;
          break;
        case "cssMiddle":
          gameQuestionSetObjArr = this.cssMiddle;
          break;
        case "cssSenior":
          gameQuestionSetObjArr = this.cssSenior;
          break;
        case "htmlJunior":
          gameQuestionSetObjArr = this.htmlJunior;
          break;
        case "htmlMiddle":
          gameQuestionSetObjArr = this.htmlMiddle;
          break;
        case "htmlSenior":
          gameQuestionSetObjArr = this.htmlSenior;
          break;
        case "jsJunior":
          gameQuestionSetObjArr = this.jsJunior;
          break;
        case "jsMiddle":
          gameQuestionSetObjArr = this.jsMiddle;
          break;
        case "jsSenior":
          gameQuestionSetObjArr = this.jsSenior;
          break;
        default:
          console.log("¡Nada que declarar!")
          break;
      }

      // console.log(`class questionSet return: ${gameQuestionSetObjArr}`)
      return gameQuestionSetObjArr;
    };

// ===========================================================================
//    CLASS Game ADD EVENT LISTENERS
// ===========================================================================

}
