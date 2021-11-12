function solution(number) {
  let answer = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      answer += i;
    }
  }
  return answer;
}
console.log(solution(12));
console.log(solution(5));
