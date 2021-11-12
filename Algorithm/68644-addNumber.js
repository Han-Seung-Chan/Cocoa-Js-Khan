function addNumber(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  const result = [...new Set(answer)];
  result.sort((a, b) => {
    return a - b;
  });
  return result;
}

console.log(addNumber([2, 1, 3, 4, 1]));
console.log(addNumber([5, 0, 2, 7]));
