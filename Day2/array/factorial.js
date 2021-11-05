// for문 사용
function otherWay(till) {
  const answer = [];
  let fac = 1;
  for (let i = 1; i <= till; i++) {
    fac *= i;
    answer.push(fac);
  }
  return answer;
}
console.log(otherWay(4));

function multiply(number) {
  let factorial = [1];

  for (let i = 2; i <= number; i++) {
    factorial.push(factorial[factorial.length - 1] * i);
  }
  return factorial;
}
console.log(multiply(4));

/* 콘솔 결과
[ 1, 2, 6, 24 ]
*/

//재귀함수 공부
