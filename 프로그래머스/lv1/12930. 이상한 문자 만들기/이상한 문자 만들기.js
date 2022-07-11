function solution(s) {
  var answer = "";
  const arrS = s.split(" ");
  let arrAnswer = "";
  for (let i = 0; i < arrS.length; i++) {
    for (let j = 0; j < arrS[i].length; j++) {
      if (j % 2 === 0) {
        arrAnswer += arrS[i][j].toUpperCase();
      } else {
        arrAnswer += arrS[i][j].toLowerCase();
      }
    }
    arrAnswer += " ";
  }
  answer = arrAnswer.slice(0, -1);
  return answer;
}
