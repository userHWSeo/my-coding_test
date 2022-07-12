function solution(s) {
    var answer = false;
    if(s.length === 4 || s.length === 6){
        if(parseInt(s) == s){
            answer = true;
        } 
    }
    return answer;
}