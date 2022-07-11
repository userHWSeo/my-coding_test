function solution(numbers) {
  let answer = [];
    // 아래 i+n을 모두 다 더하면 i++ 후 다시 i+n을 더함
  for (let i = 0; i < numbers.length; i++) {
      // 첫 번째 i에서 순차적으로 i+n을 더함
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
        // 배열 안에 같은 값이 없을 경우에 push
      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      }
    }
  }
    // answer를 오름차순으로 정렬
  answer.sort((a, b) => {
    return a - b;
  });
  console.log(answer);
  return answer;
}