var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

let sum = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) < 68) {
    sum += 3;
  } else if (input[i].charCodeAt(0) >= 68 && input[i].charCodeAt(0) < 71) {
    sum += 4;
  } else if (input[i].charCodeAt(0) >= 71 && input[i].charCodeAt(0) < 74) {
    sum += 5;
  } else if (input[i].charCodeAt(0) >= 74 && input[i].charCodeAt(0) < 77) {
    sum += 6;
  } else if (input[i].charCodeAt(0) >= 77 && input[i].charCodeAt(0) < 80) {
    sum += 7;
  } else if (input[i].charCodeAt(0) >= 80 && input[i].charCodeAt(0) < 84) {
    sum += 8;
  } else if (input[i].charCodeAt(0) >= 84 && input[i].charCodeAt(0) < 87) {
    sum += 9;
  } else {
    sum += 10;
  }
}

console.log(sum);