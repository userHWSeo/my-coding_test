function solution(n) {
  var answer = 0;
    // sqrt로 루트 생성하여 x 값을 구함
  let x = Math.sqrt(n);
  // x가 정수 일 때
  if (x % 1 === 0) {
    answer = (x + 1) * (x + 1);
  }
  // x가 정수가 아닐 때  
  else {
    answer = -1;
  }

  return answer;
}