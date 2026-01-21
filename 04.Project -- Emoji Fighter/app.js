let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.querySelector(".stage");
let fightButton = document.querySelector(".fight");

let is_vs = false;
let c = 0;

function getRandomEmoji() {
  return Math.floor(Math.random() * fighters.length);
}

fightButton.addEventListener("click", () => {
  if (is_vs) {
    stageEl.textContent += "vs";
  }
  let emoji = fighters[getRandomEmoji()];
  stageEl.textContent += emoji;
  c++;
  if (c == 2) {
    fightButton.disabled = true;
    is_vs = false;
  }

  is_vs = true;
});

if (c == 2) {
  fightButton.disabled = true;
}
