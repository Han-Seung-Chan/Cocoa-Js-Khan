const array = [];

function getCircle(shape = 'circle', radius = 5) {
  const result = radius * radius * 3.14;
  array.push(shape, result);
  return result;
}

function getRect(shape = 'rect', width = 5, height = 10) {
  const result = width * height;
  array.push(shape, result);
  return result;
}

function getTrapezoid(
  shape = 'trapezoid',
  upperSide = 3,
  base = 4,
  height = 10
) {
  const result = ((upperSide + base) * height) / 2;
  array.push(shape, result);
  return result;
}

function getArea(shape, x, y, z) {
  let result = 0;

  if (shape === 'circle' && y !== undefined) {
    shape = 'area';
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
        total = total + i * i * 3.14;
      }
      result = total;
      shape = 'circle';
      array.push(shape, result);
      break;
  }

  return result;
}

function printExecutionSequence() {
  let str = '';
  for (let index = 0; index < array.length; index++) {
    if (index % 2 !== 0) {
      const shape = array[index - 1];
      const result = '(' + array[index] + ')';
      str += shape + result + ', ';
    }
  }
  console.log(str.substring(0, str.length - 2));
}

getCircle();
getCircle();
getArea('circle', 2);
getArea('rect', 2, 3);
printExecutionSequence();
