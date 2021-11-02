function getArea(name, x, y, z) {
  if ('rect' === name) {
    return '사각형 넓이 = ' + x * y;
  }
  if ('trapezoid' === name) {
    return '사다리꼴 넓이 = ' + ((x + y) * z) / 2;
  }
  if ('circle' === name && y === undefined) {
    return '원 넓이 = ' + x * x * Math.PI;
  } else {
    let total = 0;
    for (let i = 1; i < c; i++) {
      total = total + i * i * Math.PI;
    }
    return '원 넓이의 합 = ' + total;
  }
}

console.log(getArea('rect', 10, 15));
console.log(getArea('trapezoid', 10, 15, 12));
console.log(getArea('circle', 10));
console.log(getArea('circle', 1, 15));
