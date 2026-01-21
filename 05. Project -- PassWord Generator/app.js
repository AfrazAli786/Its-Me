const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "?",
];

function getRandomChar() {
  let complete_char = "";
  for (let i = 1; i <= 15; i++) {
    let char = Math.floor(Math.random() * characters.length);
    let char_from_arr = characters[char];
    complete_char += char_from_arr;
  }
  return complete_char;
}

console.log(getRandomChar());

//! Declarations
const generate_btn = document.querySelector(".generatePass");
const resOne = document.querySelector(".res1");
const resTwo = document.querySelector(".res2");

//? Making it work

generate_btn.addEventListener("click", () => {
  resOne.textContent = getRandomChar();
  resTwo.textContent = getRandomChar();
});

resOne.addEventListener("click");
