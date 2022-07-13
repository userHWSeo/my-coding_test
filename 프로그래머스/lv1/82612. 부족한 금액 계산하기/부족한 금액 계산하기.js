function solution(price, money, count) {
    var answer = -1;
    let multiple = 0;
    // 카운트가 늘어 날 수록 price의 배수로 증가
    for(let i = 1; i <= count; i++){
        multiple += price * i
    }
    // 총 지불 금액 - money
    answer = multiple - money
    if(multiple <= money){
        answer = 0;
    }
    console.log(multiple)
    return answer;
}