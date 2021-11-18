//class로 만드는게 익숙하지 않다 일단 함수로 만들자
const writeFormTag = document.querySelector('#writeForm');
const todoInputTag = document.querySelector('#writeForm input');
const todoListTag = document.querySelector('#todoList');
const doneListTag = document.querySelector('#doneList');
const hiddenTag = document.querySelector('.hidden');

let todoListArray = [];
let doneTodoArray = [];

//==========Todo리스트 삭제할 때==========
function deleteTodo(event) {
  const todoList = event.target.parentElement;
  todoList.remove();
  todoListArray = todoListArray.filter(
    (toDo) => toDo.id !== Number(todoList.id)
  );
}
//==========Done리스트 삭제할 때==========
function deleteDone(event) {
  const doneList = event.target.parentElement;
  doneList.remove();
  doneTodoArray = doneTodoArray.filter(
    (done) => done.id !== Number(doneList.id)
  );
  if (doneTodoArray.length === 0) {
    hiddenTag.style.display = 'none';
  }
}
function deleteDone(event) {
  const doneList = event.target.parentElement;
  doneList.remove();
  doneTodoArray = doneTodoArray.filter(
    (done) => done.id !== Number(doneList.id)
  );
  if (doneTodoArray.length === 0) {
    hiddenTag.style.display = 'none';
  }
}

//==========Todo에서 Done 으로 가는거==========
function goDoneList(event) {
  hiddenTag.style.display = 'block';
  const todoList = event.target.parentElement;
  doneTodoArray = todoListArray.filter(
    (todo) => todo.id === Number(todoList.id)
  );
  printDoneList(doneTodoArray);
  todoList.remove();
}

//==========Done에서 Todo로 가는거==========
function comebackDone() {
  alert('이제 만들 예정!!');
}
//==========list를 완료했을 때==========
function printDoneList(newDone) {
  const list = createDoneListTag(newDone);
  const span = createDoneSpanTag(newDone);
  const comebackButton = createComebackButtonTag();
  const deleteButton = createDoneButtonTag();
  list.appendChild(span);
  list.appendChild(comebackButton);
  list.appendChild(deleteButton);
  doneListTag.appendChild(list);
}
function createDoneListTag(newDone) {
  const list = document.createElement('li');
  list.id = newDone[0].id;
  return list;
}
function createDoneSpanTag(newDone) {
  const span = document.createElement('span');
  span.innerText = newDone[0].text;
  return span;
}
function createComebackButtonTag() {
  const button = document.createElement('button');
  button.id = 'DoneComebackButton';
  button.innerText = '▲';
  button.addEventListener('click', comebackDone);
  return button;
}
function createDoneButtonTag() {
  const button = document.createElement('button');
  button.id = 'DoneButtonX';
  button.innerText = 'X';
  button.addEventListener('click', deleteDone);
  return button;
}

//==========새로운것이 Todo에 생성될 때==========
function printToDo(newTodo) {
  const list = createTodoListTag(newTodo);
  const span = createTodoSpanTag(newTodo);
  const completeButton = createCompleteButtonTag();
  const deleteButton = createTodoDeleteButtonTag();
  list.appendChild(span);
  list.appendChild(completeButton);
  list.appendChild(deleteButton);
  todoListTag.appendChild(list);
}
function createTodoListTag(newTodo) {
  const list = document.createElement('li');
  list.id = newTodo.id;
  return list;
}
function createTodoSpanTag(newTodo) {
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  return span;
}
function createCompleteButtonTag() {
  const buttonO = document.createElement('button');
  buttonO.id = 'TodoButtonO';
  buttonO.innerText = 'O';
  buttonO.addEventListener('click', goDoneList);
  return buttonO;
}
function createTodoDeleteButtonTag() {
  const buttonX = document.createElement('button');
  buttonX.id = 'TodoButtonX';
  buttonX.innerText = 'X';
  buttonX.addEventListener('click', deleteTodo);
  return buttonX;
}

//==========submit 되면 실행==========
function submitList(event) {
  event.preventDefault();
  const newTodo = todoInputTag.value;
  todoInputTag.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Math.random(),
  };
  console.log(newTodoObj.id);

  todoListArray.push(newTodoObj);
  printToDo(newTodoObj);
}

//==========처음시작==========
writeFormTag.addEventListener('submit', submitList);

//==========시계==========
function printClock() {
  const clockTag = document.getElementById('clock');
  clockTag.innerText = new Date().toLocaleString();
  setTimeout('printClock()', 1000);
}
