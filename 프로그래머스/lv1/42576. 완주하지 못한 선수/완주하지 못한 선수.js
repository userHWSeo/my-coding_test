function solution(participant, completion) {
    var answer = '';
    let participantObj = {}
    let completionObj = {}
    
    // participant를 새로 만든 객체에 넣기
    for(let i of participant){
        participantObj[i] = (participantObj[i] || 0) +1;
    }
    // completion를 새로 만든 객체에 넣기
    for(let i of completion){
        completionObj[i] = (completionObj[i] || 0) + 1;
        // 넣은 객체들 중 완주자는 value에서 -1을 빼기
        participantObj[i] = participantObj[i] - 1
    }
    // participantObj 객체의 value가 1인 선수들을 answer에 넣음
    for(let i in participantObj){
        if(participantObj[i] === 1){
            answer = i
        }
    }
    
    return answer;
}