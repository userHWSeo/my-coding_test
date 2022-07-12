function solution(s){
    var answer = false;
    let pCount = 0;
    let yCount = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === String.fromCharCode(112) ||
        s[i] === String.fromCharCode(80)){
            pCount++
        }
        if(s[i] === String.fromCharCode(121) ||
        s[i] === String.fromCharCode(89)){
            yCount++
        }
    }
    if(pCount === yCount){
        answer = true
    }

    return answer;
}