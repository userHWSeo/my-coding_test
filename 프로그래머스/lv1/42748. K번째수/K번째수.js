function solution(array, commands) {
    var answer = [];
    // commands 모두 반복
    for(let i = 0; i < commands.length; i++){
        // commandsIndex0에서 commandsIndex1까지 자르기 위해 변수 선언
        let commandsIndex0 = commands[i][0]
        let commandsIndex1 = commands[i][1]
        // commandsIndex0는 잘리면 안되어서 -1을 붙임
        let arrSlice = array.slice(commandsIndex0-1, commandsIndex1)
        // 잘라낸 array를 정렬
        arrSlice.sort((a,b)=>{
            return a - b;
        });
        // commands의 2번째 index번 째 숫자이므로 -1 연산 후 answer에 push
        answer.push(arrSlice[commands[i][2] - 1])
    }
    return answer;
}