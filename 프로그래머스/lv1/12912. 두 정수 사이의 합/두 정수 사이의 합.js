function solution(a, b) {
    var answer = 0;
    // b가 a보다 크거나 같으면
    if (a <= b) {
    // a에 i를 더하여 b-a까지 반복
      for (let i = 0; i <= b - a; i++) {
      answer += a + i;
    }
  } 
    // 그렇지 않은 경우는 b에 i를 더하여 answer에 더함
    else{
    // b에 i를 더하여 a-b까지 반복
        for (let i = 0; i <= a - b; i++) {
        answer += b + i;
    }
  }
    return answer;
}

// 제한조건에 a와 b의 대소관계가 정해져있지 않으므로
// a가 b보다 클 때와 b가 a보다 클 때 두 가지 경우에 for문이 각각 다르게 동작하도록 함
// a = b 일 때는 사이 값이 없어 for문의 반복에 answer이 a값 그대로 나오기 때문에 if문에 같이 묶어서 사용함
