function solution(num) {
    var answer = 0;
    // num이 1이면 answer을 바로 return
    if (num === 1) {
        return answer;
    }
    // num이 1이 아니라면 반복 (콜라츠 추측)
    while (num !== 1) {
        // 콜라츠 추측 안에서 num이 1이면 반복 중단
        if (num === 1) {
        break;
        } else {
            // 만일 짝수면 2로 나누고 answer++
            if (num % 2 === 0) {
                num = num / 2;
                answer++;
            } else {
            // 홀수면 3n+1 이후 answer++
                num = num * 3 + 1;
                answer++;
            }
        }   
    }
    // 만일 answer가 500회 이상이라면 answer = -1
    if (answer > 500) {
    answer = -1;
    }

    return answer;
}
