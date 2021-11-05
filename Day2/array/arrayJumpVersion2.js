//filter and map 사용
const people = ['crong!@#', 'honux5', 'sarah#', 'hea3d', 'zello', '5lucas'];
const isSpecialCharacters = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
const isNumber = /[0-9]/;

function filterId(people) {
  const noSpecialCharacters = people.filter(
    (id) => !isSpecialCharacters.test(id)
  );
  return noSpecialCharacters.map((id) => id.replace(isNumber, ''));
}
console.log(filterId(people));
