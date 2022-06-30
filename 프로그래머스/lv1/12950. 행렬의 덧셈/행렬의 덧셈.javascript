function solution(arr1, arr2) {
    var answer = [];
    // 첫 번째 for문은 arr1의 길이 만큼 반복
    for(let i = 0; i < arr1.length; i++){
        // 덧셈을 넣어 줄 sumArr 변수(빈 배열) 생성
        let sumArr = [];
        // 두 번째 for문은 arr1과 arr2 배열 안 쪽 배열에 길이 만큼 반복 
        for(let j = 0; j < arr1[0].length; j++){
         // 빈 배열에 for문 변수 i와 j를 사용하여 같은 행과 열을 더함
         sumArr.push(arr1[i][j] + arr2[i][j]);  
        }
        answer.push(sumArr); 
    }
    return answer;
}

// for문의 i와 j를 사용하여 문제를 풀었는데 i가 n일 때 j는 arr1[0]의 길이 만큼 반복 되는 것을 이용
// 입출력 예제1) i = 0 일 때 j는 0, 1 두 번 반복함으로
// arr[0][0] + arr2[0][0] 동작 후 arr1[0][1] + arr2[0][1]로 한번 더 동작