/*문제2) 길동이 차례 숫자 맞추기
홍길동의 차례에 어떤 숫자를 말해야 하는지를 알 수 있는 프로그램을 만든다.
10진법 ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0', '1','1', '1', '2', 
'1', '3', '1', '4', '1', '5', '1', '6', '1', '7', '1', '8', '1', '9', ]*/
function solution(binary, number, player, dong) {
  let answer = [];
  for (let value = 0; value < number * player; value++) {
    let change = value.toString(binary).split('');
    answer.push(...change);
  }
  const result = answer.filter(function (v, index) {
    return (index + 1) % player === dong;
  });
  console.log(result);
}
//매개변수 (진법, 몇번, 몇명, 길동이 차례)
solution(10, 5, 3, 2);

/* 콘솔 결과
[
  '1', '4', '7',
  '1', '1', '1',
  '4'
]
*/
