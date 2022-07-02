function solution(phone_number) {
    var answer = '';
    // 뒷 4자리를 만들 변수 fourNum과 별을 만들 start를 생성 
    let fourNum = "";
    let stars = "";
    // 뒷 4자리를 fourNum 변수에 넣음
    for(let i = 4; i > 0; i--){
        fourNum += phone_number.charAt(phone_number.length-i);
    };
    // 별을 stars 변수에 넣음
    for(let j = 0; j < phone_number.length-4; j++){
        stars += "*";
    };
    answer = stars + fourNum;
    
    return answer;
}
    
// for문과 charAt 메소드를 사용하여 뒷 4자리를 fourNum 변수에 넣음
// 별 또한 for문을 사용하여 전화번호의 전체 길이 - 4 (뒷 4자리) 만큼 별을 stars 변수에 넣음