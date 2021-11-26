const isPalindrome = function (x) {
  if (x < 0) return false;
  let reverseNumbers = Number(x.toString().split('').reverse().join(''));
  if (x === reverseNumbers) return true;
  else return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(210));
console.log(isPalindrome(0));
