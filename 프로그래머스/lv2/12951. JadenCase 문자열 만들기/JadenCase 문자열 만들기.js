function solution(s) {
    var answer = [];
    // 문자열을 배열로 변환
    let arrInput = s.split(' ');
    for(let i = 0; i < arrInput.length; i++){
        // 문자열을 모두 소문자로 변경
        arrInput[i] = arrInput[i].toLowerCase();
        // 맨 앞 문자만 대문자로 변경 후 뒤에 나머지 문자열을 붙임
        answer.push(arrInput[i].charAt(0).toUpperCase() + arrInput[i].slice(1));
    }
    
    return answer.join(" ")
}