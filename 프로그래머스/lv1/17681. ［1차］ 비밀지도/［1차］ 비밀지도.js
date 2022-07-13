function solution(n, arr1, arr2) {
    var answer = [];
    let binaryAnswer = [];
    let arr1BinaryNum = [];
    let arr2BinaryNum = [];
    // arr1와 arr2의 값을 2진수로 변환
    for(let i = 0; i < n; i++){
        let map = ""
        let sum = "";
        arr1BinaryNum.push(arr1[i].toString(2))
        arr2BinaryNum.push(arr2[i].toString(2))
        // 이진수의 길이가 n보다 작으면 길이 만큼 앞에 0을 추가
        if(arr1BinaryNum[i].length !== n){
            while(true){
                arr1BinaryNum[i] = "0" + arr1BinaryNum[i]
                if(arr1BinaryNum[i].length === n){
                    break;
                }
            }
        }
        if(arr2BinaryNum[i].length !== n){
            while(true){
                arr2BinaryNum[i] = "0" + arr2BinaryNum[i]
                if(arr2BinaryNum[i].length === n){
                    break;
                }
            }
        }
        // 2진수의 각 자리 수끼리 더함
        for(let j = 0; j < n; j++){
           sum += String(+(arr1BinaryNum[i][j]) + +(arr2BinaryNum[i][j]));
        }
        binaryAnswer.push(sum)
        // 1혹은 2가 나오면 벽, 0이 나오면 공간
        // 합쳐진 arr를 #과 " "로 표현
        for(let k = 0; k < n; k++){
            if(binaryAnswer[i][k] === '0') {
                map += " "
            }
            else {
                map += "#"
            }
        }
        answer.push(map)
    }
    return answer;
}