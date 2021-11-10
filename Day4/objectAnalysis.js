const data1 = '[1,2,[3,4,[5,[6]]]]'; // 정상
const data2 = '[1,2,[3,4,[5,[6]]'; // 괄호 개수 불일치 (열린괄호 더 많음)
const data4 = '[1,2,[3,4]]],[5,[6]]'; // 괄호 개수 불일치 (닫는괄호 더 많음)
const data3 = '][1,2,[3,4,[5],[6]]'; // 시작부터 닫음

function run(data) {
  let bracketArr = [];
  let bracketCount = 0;
  let restCount = 0;

  for (let index = 0; index < data.length; index++) {
    let changeASCII = data.charCodeAt(index);
    switch (changeASCII) {
      case 91: // '['
        bracketArr.push(91);
        bracketCount++;
        break;
      case 93: // ']'
        if (bracketArr.length !== 0) {
          bracketArr.pop();
        } else {
          console.log('닫는 괄호가 일치하지 않습니다');
          return;
        }
        bracketCount++;
        break;
      case 44: // ','
        restCount++;
        break;
    }
  }
  if (bracketArr.length !== 0) {
    console.log('닫는 괄호가 일치하지 않습니다');
    return;
  }
  printAnalysis(data, restCount, bracketCount);
}

run(data1);
run(data2);
run(data3);
run(data4);

function printAnalysis(data, restCount, bracketCount) {
  const total = data.length - restCount - bracketCount;
  console.log(
    `배열의 중첩된 깊이 수준은 ${
      bracketCount / 2
    } 이며, 총 ${total} 개의 원소가 포함되어 있습니다.`
  );
}
