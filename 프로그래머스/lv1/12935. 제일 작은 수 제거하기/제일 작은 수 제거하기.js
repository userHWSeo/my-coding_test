function solution(arr) {
    // 배열의 길이가 1과 같거나 작으면 [-1] return
  if (arr.length <= 1) {
    return [-1];
  }
    // arr의 가장 작은 수 minNum
  const minNum = Math.min(...arr);
    // 해당 수를 찾아 splice로 자르고 나머지 배열 반환
  arr.splice(arr.indexOf(minNum), 1);

  console.log(arr);
  return arr;
}