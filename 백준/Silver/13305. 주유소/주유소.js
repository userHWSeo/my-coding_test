const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const distance = input[1].split(" ").map(Number);
const oilMoney = input[2].split(" ").map(Number);

let result = 0;
let minOilMoney = oilMoney[0];

for (let i = 0; i < distance.length; i++) {
  if (minOilMoney > oilMoney[i]) {
    minOilMoney = oilMoney[i];
  }
  result += distance[i] * minOilMoney;
}

console.log(result);