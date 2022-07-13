function solution(n) {
    var answer = 0;
    let x = 0;
    while(x < n){
        if(n % x === 1){
            answer = x;
            break;
        }
        else {
            answer = x;
            x++
        }
    }
    return answer;
}