//for in 사용 === 객체 순환
const data = {
  debug: 'on',
  window: {
    title: 'Sample Confabulatory Widget',
    name: 'main_window',
    width: 500,
    height: 500,
  },
  image: {
    src: 'Images/Sun.png',
    name: 'sun1',
    hOffset: 250,
    vOffset: 250,
    alignment: 'center',
  },
  text: {
    data: 'Click Here',
    size: 36,
    style: 'bold',
    name: 'text1',
    hOffset: 250,
    vOffset: 100,
    alignment: 'center',
    onMouseUp: 'sun1.opacity = (sun1.opacity / 100) * 90;',
  },
};

function makeArray(data) {
  const result = [];
  for (outsideValue in data) {
    //console.log(outsideValue);
    for (insideValue in data[outsideValue]) {
      //console.log(insideValue);
      if (typeof data[outsideValue][insideValue] === 'number') {
        result.push(insideValue);
      }
    }
  }
  return result;
}
console.log(makeArray(data));
