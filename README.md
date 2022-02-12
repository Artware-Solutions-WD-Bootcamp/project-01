# "The Circle" Job Interview
[Versión española](LEAME.md)

## Table of Content 

  - [Table of Content](#table-of-content)
  - [Description](#description)
  - [MVP](#mvp)
  - [Backlog](#backlog)
  - [Data structure](#data-structure)
  - [States](#states)
  - [Demo](#demo)


## Description
An IT company needs to hire HTML, CSS or JS programmers.
The candidate has to answer the questions correctly to get the job.
To do this, you must capture the correct answer from among the answers on the
 move using the arrow keys.
You will win the position if you pass both stages and answer more than 60% of
 the answers correctly.
- Visible enemies:
  - The interviewer: will sometimes ask leading questions to see the candidate's
   speed-reading capabilities and attention to detail
- Invisible enemies:
  - Errors: In each round, the candidate may have a maximum of errors
  - Time:
    - The answers will enter the screen at the same time as the question is displayed
     and will end with the expulsion of the candidate if he fails to answer a question
     before it reaches the bottom edge of the board
    - Each answer has a random descent speed, therefore, it is very possible
     that a more difficult question will have a shorter response time, forcing the
     candidate to answer without having too much time to think
  - Space: Answers may have a small transparent area around, having the candidate
     to be careful not to go too close of the wrong answer so as not to touch it
     before the correct answer
- Bonus: The salary will be calculated based on the speed of response.
     The shorter the total time, the higher the salary received.



## MVP
- DOM manipulation
- Use of canvas
- Loops
- Recursion
- Classes
- Colissions
- Win/Lose
- Deploy


## Backlog
- Multilanguage
- Audio effects
- Links to webpages for correct answers
- Bind the answer's entrance delay according to question's length
- Dynamic answers, creation


## Data structure
Classes and methods definition


## States y States Transitions
The game has three states and two sub-states

- splashScreen
- gameScreen
  - phase I
  - phase II
- gameoverScreen
  - win
  - lose


## Additional Links

### Demo
[Demo => ](https://artware-solutions-wd-bootcamp.github.io/project-01/)

