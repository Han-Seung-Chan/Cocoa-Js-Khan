const longestCommonPrefix = function (str) {
  let prefix = str[0];
  for (let el of str) {
    if (el === prefix) continue;
    while (el.indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'raceway', 'car']));
