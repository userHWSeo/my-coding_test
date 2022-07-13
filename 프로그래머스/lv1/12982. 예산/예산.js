function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    let count = 0;
    // 금액이 작은 물품부터 차례대로 구매 할 예정
    d.sort((a, b)=>{
        return a - b;
    })
    for(let i = 0; i < d.length; i++){
        sum += d[i]
        if(sum > budget){
            answer = count
            break
        }
        count++
    }
    answer = count
    return answer;
}