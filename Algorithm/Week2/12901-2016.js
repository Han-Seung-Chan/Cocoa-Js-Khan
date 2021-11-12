function solution(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let result = days[new Date(2016, a - 1, b).getDay()];

  return result;
}
console.log(solution(5, 24));
