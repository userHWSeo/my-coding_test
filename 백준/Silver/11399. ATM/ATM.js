const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const list = input[1].split(" ").sort((a, b) => {
  return a - b;
});

let sumNum = 0;
let result = 0;
for (let i = 0; i < list.length; i++) {
  sumNum += Number(list[i]);
  result += sumNum;
}

console.log(result);