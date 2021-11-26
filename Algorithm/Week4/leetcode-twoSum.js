const toSum = function (nums, target) {
  let elCount = 0;
  let vlCount = 0;
  for (let el of nums) {
    for (let vl of nums) {
      if (vlCount === nums.length) vlCount = 0;

      if (elCount === vlCount) {
        vlCount++;
        continue;
      }
      if (el + vl === target) return [elCount, vlCount];

      vlCount++;
    }
    elCount++;
  }
};
console.log(toSum([2, 7, 11, 15], 9));
console.log(toSum([3, 2, 4], 6));
console.log(toSum([3, 3], 6));
