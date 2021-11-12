const makeStar = (number) => {
  let star = '';
  for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
      star += '*';
    }
    if (i !== number - 1) {
      star += '\n';
    }
  }
  return star;
};
console.log(makeStar(5));
