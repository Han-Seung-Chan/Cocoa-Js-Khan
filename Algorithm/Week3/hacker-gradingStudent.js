const grades = [73, 67, 38, 33];
function getGradeStudent(grades) {
  const answer = grades.map((score) => {
    const isRound = 5 - (score % 5);
    if (isRound < 3 && score >= 38) {
      score += isRound;
    }
    return score;
  });
  return answer;
}
console.log(getGradeStudent(grades));
