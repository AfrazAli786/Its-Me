import { getStockData } from "./fakeStockApi.js";

const btn = document.querySelector(".stop-btn");
console.log(btn);

let c = null;

function renderStockData(functiondata) {
  const nameelement = document.querySelector(".name");
  const symelement = document.querySelector(".symbol");
  const priceelement = document.querySelector(".price");
  const timeelement = document.querySelector(".time");

  nameelement.textContent = functiondata.name;
  symelement.textContent = functiondata.sym;
  priceelement.textContent = `$${functiondata.price}`;
  timeelement.textContent = functiondata.time;

  if (c > functiondata.price) {
    priceelement.style.color = "red";
    c = functiondata.price;
  } else if (c < functiondata.price) {
    priceelement.style.color = "green";
    c = functiondata.price;
  } else {
    priceelement.style.color = "black";
  }
}
btn.addEventListener("click", () => {
  clearInterval();
});

// setInterval(() => {
//   console.log(c);
//   renderStockData(getStockData());
// }, 2000);
