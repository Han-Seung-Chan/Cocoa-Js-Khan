const reverse = function (x) {
  if (x === 0) return 0;
  const maxNumber = 2147483647;
  const absNumber = Math.abs(x);
  let reverseNumber = Number(absNumber.toString().split('').reverse().join(''));
  if (reverseNumber >= maxNumber) return 0;
  if (x < 0) return -reverseNumber;
  if (x > 0) return reverseNumber;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
