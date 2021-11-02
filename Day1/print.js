const array = [];

function getCircle(shape = 'circle', radius = 5) {
  array.push(shape);
  return radius * radius * Math.PI;
}

function getRect(shape = 'rect', width = 5, height = 10) {
  array.push(shape);
  return width * height;
}

function getTrapezoid(
  shape = 'trapezoid',
  upperSide = 3,
  base = 4,
  height = 10
) {
  array.push(shape);
  return ((upperSide + base) * height) / 2;
}

function getArea(shape, x, y, z) {
  if (shape === 'circle' && y !== undefined) {
    shape = 'circleSum';
  }
  switch (shape) {
    case 'circle':
      result = getCircle(shape, x);
      break;
    case 'rect':
      result = getRect(shape, x, y);
      break;
    case 'trapezoid':
      result = getTrapezoid(shape, x, y, z);
      break;
    case 'circleSum':
      let total = 0;
      for (let i = 1; i < y; i++) {
        total = total + i * i * Math.PI;
      }
      result = total;
      shape = 'circle';
      array.push(shape);
      break;
    default:
      console.log('도형을 제대로 입력하세요');
      return;
  }
}

function printExecutionSequence() {
  const printLog = array.join(', ');
  console.log(printLog);
}

getCircle();
getRect();
getArea('circle', 2);
getArea('rect', 2, 3);
printExecutionSequence();
getArea('aa', 2);
