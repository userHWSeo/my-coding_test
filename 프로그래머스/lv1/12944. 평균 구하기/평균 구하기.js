function solution(arr) {
    var answer = 0;
    let sum = 0;
    // 반복문으로 배열 내 모든 수 더하여 sum 변수에 저장 
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    // sum을 배열의 길이 만큼 나눔
    answer = sum / arr.length
    
    return answer;
}

// 반복문을 활용한 간단한 평균 구하기이다. 