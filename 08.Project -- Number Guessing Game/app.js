//! vars for DOM elements
const messageEl = document.getElementById("message");
const guessInputEl = document.getElementById("guessInput");
const guessBtnEl = document.getElementById("guessButton");
const resetBtnEl = document.getElementById("resetButton");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber;
let attemptsLeft = 10;
let msg = prompt(
  "Welcome to the Number Guessing Game! Choose a difficulty level:\n1. Easy (1-10, 5 attempts)\n2. Medium (1-50, 10 attempts)\n3. Hard (1-100, 15 attempts)",
);
let n;
let max;

switch (msg) {
  case "1":
    randomNumber = getRandomNumber(1, 10);
    max = 10;
    attemptsLeft = 5;
    n = 5;
    messageEl.textContent = "Guess a number between 1 and 10!";
    break;
  case "2":
    randomNumber = getRandomNumber(1, 50);
    max = 50;
    attemptsLeft = 10;
    n = 10;
    messageEl.textContent = "Guess a number between 1 and 50!";
    break;
  case "3":
    randomNumber = getRandomNumber(1, 100);
    attemptsLeft = 15;
    max = 100;
    n = 15;
    messageEl.textContent = "Guess a number between 1 and 100!";
    break;
    default:
    alert("Invalid choice! Defaulting to Medium level.");
    randomNumber = getRandomNumber(1, 50);
    max = 50;
    attemptsLeft = 10;
    n = 10;
    messageEl.textContent = "Guess a number between 1 and 50!";

}


guessBtnEl.addEventListener("click", function () {
  const userGuess = Number(guessInputEl.value);
  if (!userGuess || userGuess < 1 || userGuess > max) {
    messageEl.textContent = `Please enter a valid number between 1 and ${max}.`;1
    return;
  }
  attemptsLeft--;

  if (userGuess === randomNumber) {
    messageEl.textContent = `Congratulations! You guessed the number ${randomNumber} correctly! on your ${10 - attemptsLeft} attempt.`;
  } else if (attemptsLeft === 0) {
    messageEl.textContent = `Game Over! You've used all your attempts. The correct number was ${randomNumber}.`;
    guessBtnEl.disabled = true;
  } else {
    messageEl.textContent = `Try again! You have ${attemptsLeft} attempts left.`;
  }
});

resetBtnEl.addEventListener("click", function () {
  window.location.reload();
});

//? Testing
