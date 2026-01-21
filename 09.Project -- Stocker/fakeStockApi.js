export function getStockData() {
  return {
    name: "Test Corp",
    sym: "Qta",
    price: randomNumber(3) + Math.random().toFixed(2),
    time: new Date().toLocaleTimeString(),
  };
}

function randomNumber(num) {
  return Math.floor(Math.random() * (num + 1));
}
