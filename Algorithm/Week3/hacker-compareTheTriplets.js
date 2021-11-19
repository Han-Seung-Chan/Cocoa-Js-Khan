const a = [1, 2, 3];
const b = [3, 2, 1];
function solution(a, b) {
  let Alice = 0;
  let Bob = 0;
  const length = a.length <= b.length ? a.length : b.length;
  for (let i = 0; i < length; i++) {
    if (a[i] === b[i]) continue;
    if (a[i] > b[i]) Alice++;
    else Bob++;
  }
  return [Alice, Bob];
}
console.log(solution(a, b));
console.log(solution([17, 28, 30], [99, 16, 8]));
