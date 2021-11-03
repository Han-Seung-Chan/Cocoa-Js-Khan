// solution(2, 4, 2); //2진수, 4개의 숫자까지, 2명이 말할때
// ['0', '1', '1', '0', '1', '1', '1', '0', '0', '1', '0', '1', '1', '1', '0', '1', '1', '1']
function solution(binary, number, player) {
  let answer = [];
  for (let value = 0; value < number * player; value++) {
    let change = value.toString(binary).split('');
    answer.push(...change);
  }
  console.log(answer);
}
solution(10, 5, 3);
/* 콘솔 결과
[
  '0', '1', '1', '0', '1',
  '1', '1', '0', '0', '1',
  '0', '1', '1', '1', '0',
  '1', '1', '1'
]
*/
