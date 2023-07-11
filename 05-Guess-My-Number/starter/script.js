"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("❌Not a number");
  } else if (guess === secretNumber) {
    displayMessage("🎉You WIN");
    document.querySelector(".number").textContent = guess;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#124123";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too high" : "📉Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🤡You LOSE");
      document.querySelector(".score").textContent = 0;
    }
  }
});
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "📈Too high";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "🤡You LOSE";
//     document.querySelector(".score").textContent = 0;
//   }
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "📉Too low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "🤡You LOSE";
//     document.querySelector(".score").textContent = 0;
//   }
// }

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
