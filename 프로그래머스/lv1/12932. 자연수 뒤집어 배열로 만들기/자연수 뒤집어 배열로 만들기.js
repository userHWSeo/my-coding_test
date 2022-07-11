function solution(n) {
    var answer = [];
    const strNum = String(n);
    for(let i = strNum.length - 1; i >= 0; i--){
        answer.push(Number(strNum[i]))
    }

    return answer;
}