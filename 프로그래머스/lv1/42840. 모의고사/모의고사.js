function solution(answers) {
    var result = [];
    let firStudent = [1, 2, 3, 4, 5];
    let secStudent = [2, 1, 2, 3, 2, 4, 2, 5];
    let thiStudent = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let firInt = 0;
    let secInt = 0;
    let thiInt = 0;
    let correctAnswer = [0,0,0];
    // 정답의 길이만큼 반복
    for(let i = 0; i < answers.length; i++){
        // answer의 길이가 1회 반복보다 길면 각 int들을 다시 0으로 보내어 처음부터 카운트
        if(firStudent[firInt] === undefined) {
            firInt = 0;
        }
        if(secStudent[secInt] === undefined) {
            secInt = 0;
        }
        if(thiStudent[thiInt] === undefined) {
            thiInt = 0;
        }
        // answers들의 정답 횟수를 counts 객체에 저장
        if(answers[i] === firStudent[firInt]){
            correctAnswer[0] = (correctAnswer[0] || 0) +1
        }
        if(answers[i] === secStudent[secInt]){
            correctAnswer[1] = (correctAnswer[1] || 0) +1
        }
        if(answers[i] === thiStudent[thiInt]){
            correctAnswer[2] = (correctAnswer[2] || 0) +1
        }
        firInt++;
        secInt++;
        thiInt++;
    }
    // 배열 중 가장 큰 수 찾기
    const maxValue = Math.max(...correctAnswer)
    // 가장 큰 수와 동일한 index를 찾아 result에 추가
    for(let i = 0; i < correctAnswer.length; i++){
        if(maxValue === correctAnswer[i]){
            result.push(i+1)
        }
    }
    return result;
}