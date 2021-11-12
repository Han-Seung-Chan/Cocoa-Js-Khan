function solution(array, divisor) {
  let answer = [];
  let result = 0;
  array.forEach((element) => {
    result = element / divisor;
    if (Number.isInteger(result)) {
      answer.push(element);
    }
  });
  if (answer.length === 0) {
    answer.push(-1);
  }
  answer.sort((a, b) => {
    return a - b;
  });
  console.log(answer);
}

solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);
solution([3, 2, 6], 10);
