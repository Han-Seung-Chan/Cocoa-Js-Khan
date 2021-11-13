function solution(result) {
  const student0 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  const student1 = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5];
  const student2 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = [0, 0, 0];

  for (let i = 0; i < result.length; i++) {
    if (student0[i % student0.length] === result[i]) {
      score[0]++;
    }
    if (student1[i % student1.length] === result[i]) {
      score[1]++;
    }
    if (student2[i % student2.length] === result[i]) {
      score[2]++;
    }
  }

  const answer = score.reduce((sumValue, currentValue, index) => {
    if (currentValue === Math.max(...score)) sumValue.push(index + 1);
    return sumValue;
  }, []);

  return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([2, 3, 1, 3, 5]));
