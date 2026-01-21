let counter = document.querySelector(".count-el");
let inc_btn = document.querySelector(".increment-btn");
let dec_btn = document.querySelector(".decrement-btn");
let save = document.querySelector(".save");
let saved = document.querySelector(".saved");
let clear = document.querySelector(".clear");

let i = 0;

inc_btn.addEventListener("click", () => {
  i++;
  counter.innerText = i;
});

dec_btn.addEventListener("click", () => {
  i--;
  counter.innerText = i;
});

save.addEventListener("click", () => {
  saved.innerText += i + "-";
});

clear.addEventListener("click", () => {
  saved.innerText = "";
});
