function solution(n) {
    // answer은 n보다 큼
        var answer = n+1;
    // 무한 루프
        while(n < answer){
            // 1을 카운트할 변수 
            let count1 = 0;
            let count2 = 0;
            // 2진법 변환
            let nBinary = n.toString(2);
            let answerBinary = answer.toString(2);
            for(let j=0; j < answerBinary.length; j++){
                if(nBinary[j] === '1'){
                    count1++
                }
                if(answerBinary[j] === '1'){
                    count2++
                }
            }
            if(count1 === count2 && answer > n){
                return answer
            }
            answer++
        }
        
    return answer;
}