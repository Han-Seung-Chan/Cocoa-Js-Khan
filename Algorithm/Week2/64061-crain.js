function solution(board, moves) {
  let count = 0;
  const dollStore = [];

  for (let verticalPosition of moves) {
    verticalPosition--;
    let horizontalPosition = 0;

    while (horizontalPosition < board.length) {
      if (board[horizontalPosition][verticalPosition] !== 0) {
        const pick = board[horizontalPosition][verticalPosition];
        board[horizontalPosition][verticalPosition] = 0;

        if (pick === dollStore[dollStore.length - 1]) {
          dollStore.pop();
          count += 2;
        } else dollStore.push(pick);
        break;
      }
      horizontalPosition++;
    }
  }
  return count;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
