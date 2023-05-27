var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = parseInt(input[0]);

let arr = input.slice(1, input.length);

arr.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < input.length - 1; i++) {
  console.log(arr[i]);
}