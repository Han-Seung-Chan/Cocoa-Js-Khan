//class로 만드는게 익숙하지 않다 일단 함수로 만들자
const writeFormTag = document.querySelector('#writeForm');
const todoInputTag = document.querySelector('#writeForm input');
const todoListTag = document.querySelector('#todoList');
const doneListTag = document.querySelector('#doneList');

let toDoListArray = [];
let doneTodoArray = [];

//==========ToDo에서 Done 으로 가는거==========
function goDoneList(event) {
  const todoList = event.target.parentElement;
  doneTodoArray = toDoListArray.filter(
    (done) => done.id === Number(todoList.id)
  );
  localStorage.setItem('doneTodo', JSON.stringify(doneTodoArray));
  printDoneList(doneTodoArray);
  todoList.remove();
}

//==========리스트 삭제할 때==========
function deleteTodo(event) {
  const todoList = event.target.parentElement;
  todoList.remove();
  toDoListArray = toDoListArray.filter(
    (toDo) => toDo.id !== Number(todoList.id)
  );
  saveToDos();
}

//완료됬을 때
function printDoneList(newDone) {
  const list = createDoneListTag(newDone);
  const span = createDoneSpanTag(newDone);
  const button = createDoneButtonTag();
  list.appendChild(span);
  list.appendChild(button);
  doneListTag.appendChild(list);
}

function createDoneButtonTag() {
  const button = document.createElement('button');
  button.id = 'DoneButtonX';
  button.innerText = 'X';
  button.addEventListener('click', deleteTodo);
  return button;
}

function createDoneSpanTag(newDone) {
  const span = document.createElement('span');
  span.innerText = newDone[0].text;
  return span;
}

function createDoneListTag(newDone) {
  const list = document.createElement('li');
  list.id = newDone[0].id;
  return list;
}

//==========저장소에 리스트 저장할 때==========
function saveToDos() {
  localStorage.setItem('savedList', JSON.stringify(toDoListArray));
}

//==========새로운것이 생성될 때==========
function paintToDo(newTodo) {
  const list = createTodoListTag(newTodo);
  const span = createTodoSpanTag(newTodo);
  const completeButton = createCompleteButtonTag();
  const deleteButton = createTodoDeleteButtonTag();
  list.appendChild(span);
  list.appendChild(completeButton);
  list.appendChild(deleteButton);
  todoListTag.appendChild(list);
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

function createTodoSpanTag(newTodo) {
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  return span;
}

function createTodoListTag(newTodo) {
  const list = document.createElement('li');
  list.id = newTodo.id;
  return list;
}

//==========submit 되면 실행==========
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInputTag.value;
  todoInputTag.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoListArray.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

//==========처음시작==========
writeFormTag.addEventListener('submit', handleToDoSubmit);

//==========새로고침 했을 때 값이 있면 실행==========
if (localStorage !== null) {
  haveValueInStore();
}

function haveValueInStore() {
  const savedToDos = localStorage.getItem('savedList');
  const savedDone = localStorage.getItem('doneTodo');

  if (savedToDos !== null) {
    const parsedTodo = JSON.parse(savedToDos);
    toDoListArray = parsedTodo;
    parsedTodo.forEach(paintToDo);
  }

  if (savedDone !== null) {
    const parsedDone = JSON.parse(savedDone);
    doneTodoArray = parsedDone;
    console.log(parsedDone);
    parsedDone.forEach(printDoneList);
  }
}
