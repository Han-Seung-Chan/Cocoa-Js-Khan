const data = [
  89.23, 82.03, 71.56, 78.82, 85.05, 84.44, 67.53, 71.7, 77.97, 73.77, 84.25,
  67.01, 73.78, 64.19, 89.89, 90.32, 73.21, 75.35, 83.22, 74.01,
];
function getMean(score) {
  let result = getAverage(score);
  return result;
}

function getStandardDeviation(score) {
  //평균 구하기
  let result = getAverage(score);

  //분산 구하기
  let dispersion = getDispersion(score, result);

  //분산에다가 루트 하면 표준편차
  let StandardDeviation = Math.sqrt(Number(dispersion));
  return StandardDeviation.toFixed(2);
}

//70 ~ 80점 사이의 점수를 지닌 비율 구하기
function getRatio(minScore, maxScore) {
  const average = getMean(data);
  const standardDeviation = getStandardDeviation(data);

  let seventyPoints = Math.abs(minScore - average) / standardDeviation;
  let eightyPoints = Math.abs(maxScore - average) / standardDeviation;

  seventyPoints = seventyPoints.toFixed(2);
  eightyPoints = eightyPoints.toFixed(2);

  console.log(seventyPoints, eightyPoints);

  //1.3 = 0.34849  0.28 = 0.11026
  const result = (0.34849 + 0.11026) * 100;
  return result;
}

//----------함수 실행----------
console.log(getMean(data));
console.log(getStandardDeviation(data));
console.log(getRatio(70, 80));

//----------평균 구하기----------
function getAverage(score) {
  const answer = score.reduce((sumValue, currentValue) => {
    return sumValue + currentValue;
  });
  let result = answer / score.length;
  return result.toFixed(2);
}

//----------분산 구하기----------
function getDispersion(score, result) {
  const dispersionArray = [];
  let finalResult = 0;
  let calculationResult = 0;

  for (let i = 0; i < score.length; i++) {
    calculationResult = score[i] - result;

    if (calculationResult < 0) {
      calculationResult = Math.abs(calculationResult);
    }
    calculationResult = calculationResult * calculationResult;

    dispersionArray.push(calculationResult.toFixed(2));
  }

  for (let j = 0; j < dispersionArray.length; j++) {
    finalResult += Number(dispersionArray[j]);
  }
  finalResult = finalResult / dispersionArray.length - 1;

  return finalResult.toFixed(2);
}
