function solution(s) {
    var answer = '';
    // 홀수 일 때
    if(s.length % 2 !== 0){
        answer = s[Math.floor(s.length / 2)]
    }
    // 짝수 일 때
    else{
        answer += s[Math.floor(s.length / 2) - 1]
        answer += s[Math.floor(s.length / 2)]
    }
    return answer;
}