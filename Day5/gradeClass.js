const data = [
  89.23, 82.03, 71.56, 78.82, 85.05, 84.44, 67.53, 71.7, 77.97, 73.77, 84.25,
  67.01, 73.78, 64.19, 89.89, 90.32, 73.21, 75.35, 83.22, 74.01,
];

class GradeManager {
  constructor(data) {
    this.data = data;
  }
  //---합---
  getSum() {
    return this.data.reduce((pre, cur) => pre + cur);
  }
  //---평균---
  getMean() {
    return this.getSum() / this.data.length;
  }
  //---편차---
  getDeviation() {
    return this.data.map((value) => {
      return Math.abs(value - this.getMean());
    });
  }
  //---분산---
  getDispersion() {
    return (
      this.getDeviation().reduce((per, cur) => (per += cur ** 2), 0) /
      this.data.length
    );
  }
  //---표준편차---
  getStandardDeviation() {
    return Math.sqrt(this.getDispersion());
  }
}
const grade = new GradeManager(data);

console.log(grade.getSum());
console.log(grade.getMean());
//console.log(grade.getDeviation());
console.log(grade.getDispersion());
console.log(grade.getStandardDeviation());
