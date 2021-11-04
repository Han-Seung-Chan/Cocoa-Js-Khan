// for문 사용
function multiply(number) {
  let factorial = [1];

  for (let i = 0; i <= number; i++) {
    factorial.push(factorial[factorial.length - 1] * i);
  }
  return factorial;
}

console.log(multiply(4));
