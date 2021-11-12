function OX(data) {
  let total = 0;
  let oCount = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'X') {
      total += ((oCount + 1) * oCount) / 2;
      oCount = 0;
    }
    if (data[i] === 'O') {
      oCount++;
    }
  }
  total += ((oCount + 1) * oCount) / 2;
  console.log(total);
}
OX('OOXXOXXOOO'); // 10
OX('OOXXOOXXOO'); // 9
OX('OXOXOXOXOXOXOX'); // 7
OX('OOOOOOOOOO'); // 55
OX('OOOOXOOOOXOOOOX'); // 30
