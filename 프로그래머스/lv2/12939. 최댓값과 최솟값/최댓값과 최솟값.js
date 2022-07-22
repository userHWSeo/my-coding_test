function solution(s) {
    var answer = '';
    let arrInput = s.split(" ");
    
    arrInput.sort((a,b)=>{
        return a - b;
    })
    
    answer += arrInput[0] + " " + arrInput[arrInput.length-1]
    
    return answer;
}