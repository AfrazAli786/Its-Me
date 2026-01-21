//! Declaration
let msg = document.querySelector(".message-el");
let btn_startgame = document.querySelector(".startgame");
let sum = document.querySelector("#sum-ans");
let generatecard = document.querySelector(".generatecard");
let cards = document.querySelector("#card-ans");
let restartgame = document.querySelector(".restartgame");

//?  Random card generation

function generateCard() {
  let random_card = Math.random() * (12 - 2) + 2;
  return Math.round(random_card);
}
function typewriterEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }

  element.textContent += text[i];
  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => typewriterEffect(element, text, i + 1), 40);
}

let card;
let sum_Card = 0;
let c = 0;
let c1 = 0;
let counter_3 = 0;
let counter = 0;
let i = 0;

btn_startgame.disabled = true;

generatecard.addEventListener("click", () => {
  counter++;
  if (c1 + 1 < 2) {
    card = generateCard();
    sum_Card += card;
    sum.textContent = sum_Card;
    cards.textContent += card + " ";
    if (c > 0) {
      c1 = 2;
    }
  } else {
    generatecard.disabled = true;
  }
  c1++;
  if (counter < 2) {
    btn_startgame.disabled = true;
  } else {
    btn_startgame.disabled = false;
  }
});

btn_startgame.addEventListener("click", () => {
  if (sum_Card > 21) {
    message = "Out of the game";
    btn_startgame.disabled = true;
    generatecard.disabled = true;
  } else if (sum_Card === 21) {
    message = "Wohoo! You are the winner";
    btn_startgame.disabled = true;
    generatecard.disabled = true;
  } else {
    message = "Do you want to draw another card?";
    generatecard.disabled = false;
    c1 = 0;
  }

  c = 1;
  typewriterEffect(msg, message);
});

restartgame.addEventListener("click", () => {
  btn_startgame.disabled = true;
  generatecard.disabled = false;
  msg.textContent = "Want to play another round?";
  card;
  sum_Card = 0;
  c1 = 0;
  sum.textContent = "";
  cards.textContent = "";
  c = 0;
  counter = 0;
});
