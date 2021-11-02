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
    default:
      let total = 0;
      for (let i = 1; i < y; i++) {
        total = total + i * i * Math.PI;
      }
      result = total;
      shape = 'circle';
      array.push(shape);
      break;
  }
}

function printExecutionSequence() {
  let str = '';
  for (let index = 0; index < array.length; index++) {
    const shape = array[index];
    str += shape + ', ';
  }
  console.log(str.substring(0, str.length - 2));
}

getCircle();
getCircle();
getArea('circle', 2);
getArea('rect', 2, 3);
printExecutionSequence();
