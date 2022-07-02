function solution(x) {
    var answer = true;
    // x를 string으로 변환
    let strX = x+""
    let sum = 0;
    // 변환 된 앞 자리와 뒷 자리를 가져와 숫자로 변환한 후 변수 sum에 넣음
    for(let i = 0; i < strX.length; i++){
            sum += parseInt(strX[i])
        }
        // x를 sum으로 나눈 나머지가 0이 아닐 경우 answer은 false
        if(x % sum !== 0) {
            answer = false
        }

    return answer;
}

// 입력 x를 string으로 변환하여 앞 자리와 뒷 자리를 가져와 더하는 방식으로 접근
// string을 더하면 더해지지 않고 합쳐지므로 parseInt를 사용하여 숫자로 만듬
// x를 sum으로 나누어 나머지가 0이 아니면 answer를 false로 바꿈