function solution(input) {
  let ascendingCount = 0;
  let descendingCount = 0;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] - input[i + 1] === -1) {
      ascendingCount++;
    } else if (input[i] - input[i + 1] === 1) {
      descendingCount++;
    }
  }

  if (ascendingCount === 7) {
    console.log('ascending');
  } else if (descendingCount === 7) {
    console.log('descending');
  } else {
    console.log('mixed');
  }
}
solution(['1', '2', '3', '4', '5', '6', '7', '8']); //ascending
solution(['8', '7', '6', '5', '4', '3', '2', '1']); //descending
solution(['8', '1', '7', '2', '6', '3', '5', '4']); //mixed
