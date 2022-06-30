function solution(x, n) {
    var answer = [];
    
    // 늘어 날 변수 num을 만듬
    let num = 0;
    
    // for문을 사용하여 num에 x값을 n번째까지 증가시켜 받음
    for(let i = 0; i < n; i++){
        num += x;
        answer.push(num);
    }
    return answer;
}

// 변수 num을 만들어 x를 계속 더하여 주고 더한 값은 answer에 push하며 for문에 횟수는 n만큼 반복하게 함