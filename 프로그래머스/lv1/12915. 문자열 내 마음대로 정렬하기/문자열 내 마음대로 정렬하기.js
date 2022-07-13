function solution(strings, n) {
    var answer = [];
    // n번째 인덱스를 비교 후 정렬
    // 이후 문자열을 정렬
    // 동일한 문자열이라면 사전순으로 앞선 문자열 먼저 정렬
    strings.sort((a, b)=>{
        if(a[n] > b[n]) return 1 // a[n]이 크면 오름 차순
        if(a[n] < b[n]) return -1 // b[n]이 크면 내림 차순
        if(a[n] === b[n]){ // 인덱스 문자열이 같으면
            if(a > b){ // a와 b 자체를 비교
                return 1
            }
            else {
                return -1
            }
        }
        
    })
    answer = strings
    return answer;
}