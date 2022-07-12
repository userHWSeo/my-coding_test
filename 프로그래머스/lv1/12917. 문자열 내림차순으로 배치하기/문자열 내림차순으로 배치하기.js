function solution(s) {
    var answer = '';
    let asciiArr = [];
    
    for(let i = 0; i < s.length; i++){
        asciiArr.push(s.charCodeAt(i))
    }
    asciiArr.sort((a, b)=>{
        return b - a;
    })
    for(let j = 0; j < asciiArr.length; j++){
        answer += String.fromCharCode(asciiArr[j])
    }
    console.log(asciiArr)
    
    return answer;
}