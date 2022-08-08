function solution(s) {
  var answer = "";
  let numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let str = "";

  for (let i = 0; i <= s.length; i++) {
    if (+s[i] !== +s[i]) {
      str += s[i];
      if (numbers.hasOwnProperty(str)) {
        answer += numbers[str];
        str = "";
      }
    } else {
      answer += s[i];
    }
  }
  return +answer;
}

solution("one4seveneight");