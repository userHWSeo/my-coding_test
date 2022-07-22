function solution(A,B){
    var answer = 0;
    // A에서 가장 작은 수와 B에서 가장 큰 수를 곱하여 누적해야 최솟값이 나온다.
    A.sort((a,b)=>{
        return a - b;
    })
    B.sort((a,b)=>{
        return b - a;
    })
    for(let i = 0; i < A.length; i++){
        answer += A[i] * B[i]
    }
    
    return answer;
}