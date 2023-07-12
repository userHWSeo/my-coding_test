let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let ballNum = Number(input[0]);
const basketNum = Number(input[1]);

let summary = 0;
for (let i = 1; i < basketNum + 1; i++) {
  summary += i;
}

if (summary > ballNum) {
  console.log(-1);
} else {
  ballNum -= summary;
  if (ballNum % basketNum == 0) console.log(basketNum - 1);
  else console.log(basketNum);
}
