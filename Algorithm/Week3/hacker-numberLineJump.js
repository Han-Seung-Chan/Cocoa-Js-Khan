function solution(x1, v1, x2, v2) {
  if (v1 <= v2) return 'NO';
  while (true) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) return 'YES';
    if (x1 > x2) return 'NO';
  }
}

console.log(solution(0, 3, 4, 2));
console.log(solution(0, 2, 5, 3));
console.log(solution(0, 4, 10, 2));
console.log(solution(10, 10, 20, 4));
console.log(solution(0, 3, 5, 1));
