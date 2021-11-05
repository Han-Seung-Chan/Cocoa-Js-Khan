//배열.map((요소, 인덱스, 배열) => { return 요소 });
//map은 실행하는 배열과 결과로 나오는 배열은 다른 객체이다 기존 배열을 수정하지 않고 새로운 배열 생성
//배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
const grades = [
  [88, 76, 77],
  [33, 44, 44],
  [90, 100, 94],
  [30, 44, 98],
];

function findAverageAll(grades) {
  let result = [];
  grades.map((scores) => {
    const total = scores.reduce((keepSavingValue, currentValue) => {
      return keepSavingValue + currentValue;
    });
    console.log(total);

    result.push(parseInt(total / scores.length));
  });
  return result;
}
console.log('모든 학생 평균 : ' + findAverageAll(grades));

function findAverageMax(grades) {
  const maxScore = grades.map((scores) => {
    return Math.max(...scores);
  });
  const maxResult = maxScore.reduce((cumulativeValue, presentValue) => {
    return cumulativeValue + presentValue;
  });
  return maxResult / maxScore.length;
}

console.log('모든학생 최고점수의 평균 : ' + findAverageMax(grades));
