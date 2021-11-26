const romanToInt = function (s) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let num = getNumber(s[i]);
    if (i + 1 > s.length) {
      sum += num;
      return sum;
    }

    if (num < getNumber(next)) {
      sum -= num;
    } else {
      sum += num;
    }
  }
  return sum;
};

function getNumber(num) {
  switch (num) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
  }
}

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVII')); //57
