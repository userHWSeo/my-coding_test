const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let k = input[0].split(" ").map(Number)[1];
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

console.log(arr[k-1]);
