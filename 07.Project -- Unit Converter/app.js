const btn_convert = document.querySelector(".convert");
const input_num = document.querySelector(".num");
const length_result = document.getElementById("length-result");
const volume_result = document.getElementById("volume-result");
const mass_result = document.getElementById("mass-result");

//! Vars in use
let meters;
let feet;
let liters;
let gallons;
let kilos;
let pounds;

btn_convert.addEventListener("click", function () {
  let num = input_num.value;
  meters = (num * 3.28084).toFixed(3);
  feet = (num / 3.28084).toFixed(3);
  liters = (num * 0.264172).toFixed(3);
  gallons = (num / 0.264172).toFixed(3);
  kilos = (num * 2.20462).toFixed(3);
  pounds = (num / 2.20462).toFixed(3);
  length_result.textContent = `${num} meters = ${meters} feet | ${num} feet = ${feet} meters`;
  volume_result.textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`;
  mass_result.textContent = `${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`;
});
