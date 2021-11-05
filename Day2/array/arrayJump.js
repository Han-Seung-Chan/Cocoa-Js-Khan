//"문자열".charCodeAt([문자열 자릿수]);
function filterId() {
  const id = ['crong!@#', 'honux5', 'sarah#', 'hea3d', 'zello', '5lucas'];
  let withoutNumber = []; //숫자 제거 한 문자 들어가는 배열
  for (let i = 0; i < id.length; i++) {
    withoutNumber.push(removeNumber(id[i]));
  }

  let withoutSpecialChar = []; //특수문자 제거 한 문자 들어가는 배열
  for (let j = 0; j < withoutNumber.length; j++) {
    withoutSpecialChar.push(isCharacter(withoutNumber[j]));
  }
  printId(withoutSpecialChar);
}

// 특수문자 거르는 함수
function isCharacter(id) {
  let ASCII;

  for (let i = 0; i < id.length; i++) {
    let charNum = id.charCodeAt(i);
    ASCII = charNum;
  }

  if ((ASCII >= 65 && ASCII <= 90) || (ASCII >= 97 && ASCII <= 122)) {
    return id;
  }
  return false;
}

//숫자 지우는 함수
function removeNumber(id) {
  let ASCII = id;
  for (let i = 0; i < ASCII.length; i++) {
    if (ASCII.charCodeAt(i) >= 48 && ASCII.charCodeAt(i) <= 57) {
      ASCII = ASCII.replace(ASCII[i], '');
    }
  }
  return ASCII;
}

//출력함수
function printId(id) {
  for (let i = 0; i < id.length; i++) {
    if (id[i] === false) {
      id.splice(i, 1);
    }
  }
  console.log(id);
}

//실행
filterId();
