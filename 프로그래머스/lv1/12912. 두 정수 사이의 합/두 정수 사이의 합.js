function solution(a, b) {
    var answer = 0;
    
    if (a <= b) {
      for (let i = 0; i <= b - a; i++) {
      answer += a + i;
    }
  } 
    else{
    for (let i = 0; i <= a - b; i++) {
      answer += b + i;
    }
  }
    return answer;
}