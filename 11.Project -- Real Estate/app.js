const container = document.querySelector(".container");

//?                   funcs

let price = (...prices) => {
  return prices;
};

function thikana(...place) {
  return place;
}
let area = (...areas) => {
  return areas;
};
let measurement = (...measurements) => {
  return measurements;
};

function renderCards(...functions) {
  let arr = [];
  functions.forEach((func) => {
    arr.push(func[0]);
  });
  for (let i = 0; i < arr.length; i++) {
    container.innerHTML += `
      <div class="prod 2">
          <img src="" alt="not avilable" />
          <div class="info">
            <h3>${arr[i] ? arr[i] : "No data"}</h3>
            <p>${arr[i + 1] ? arr[i + 1] : "No data"}</p>
            <p>${arr[i + 2] ? arr[i + 2] : "No data"}</p>
            <p>${arr[i + 3] ? arr[i + 3] : "No data"}</p>
          </div>
        </div>`;
  }
}

renderCards(
  price(23, 23, 321, 31),
  thikana("afraz", "aass", "Alamin"),
  area("long", "high", "not good"),
  measurement("sqft"),
);
