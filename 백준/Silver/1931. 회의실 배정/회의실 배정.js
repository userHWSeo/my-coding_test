const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
input.shift();

let lastTime = 0;
let count = 1;

const reservationList = input.map((reservation) => {
  const resultArr = reservation.split(" ").map(Number);
  return resultArr;
});

reservationList.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

for (let i = 1; i < reservationList.length; i++) {
  if (reservationList[lastTime][1] <= reservationList[i][0]) {
    lastTime = i;
    count += 1;
  }
}
console.log(count);
