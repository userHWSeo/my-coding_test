let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 회문 검사
function palindrome(x) {
  return x == x.split("").reverse().join("");
}

const testCaseNum = Number(input[0]);

for (let i = 1; i <= testCaseNum; i++) {
  let data = input[i];
  if (palindrome(data)) console.log(0);
  else {
    let pass = false;
    let n = data.length;
    for (let j = 0; j < parseInt(n / 2); j++) {
      if (data[j] != data[n - j - 1]) {
        // 앞쪽 문자 제거 후 검사
        if (palindrome(data.slice(0, j) + data.slice(j + 1, n))) pass = true;
        // 뒷쪽 문자 제거 후 검사
        if (palindrome(data.slice(0, n - j - 1) + data.slice(n - j, n)))
          pass = true;
        break;
      }
    }
    if (pass) console.log(1);
    else console.log(2);
  }
}
