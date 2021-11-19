const $writeForm = document.querySelector('#writeForm');
const $todoInput = document.querySelector('#writeForm input');
const $todoList = document.querySelector('#todoList');
const $doneList = document.querySelector('#doneList');
const $hidden = document.querySelector('.hidden');

let todoListArray = [];
let doneTodoArray = [];

function deleteTodo(event) {
  const todoList = event.target.parentElement;
  todoList.remove();
  todoListArray = todoListArray.filter(
    (toDo) => toDo.id !== Number(todoList.id)
  );
}
function deleteDone(event) {
  const doneList = event.target.parentElement;
  doneList.remove();
  doneTodoArray = doneTodoArray.filter(
    (done) => done.id !== Number(doneList.id)
  );
  hiddenClass();
}

function hiddenClass() {
  if (doneTodoArray.length === 0) {
    $hidden.style.display = 'none';
  }
}

function comebackDone(event) {
  let temporaryStorage = [];
  const doneList = event.target.parentElement;
  temporaryStorage = doneTodoArray.filter(
    (done) => done.id === Number(doneList.id)
  );
  todoListArray.push(temporaryStorage[0]);

  doneTodoArray = doneTodoArray.filter(
    (done) => done.id !== Number(doneList.id)
  );

  goTodoList(todoListArray);
  doneList.remove();
}

function goTodoList(newTodo) {
  const listTag = createDoneList(newTodo);
  const spanTag = createDoneSpan(newTodo);
  const completeButtonTag = createCompleteButton();
  const deleteButtonTag = createTodoDeleteButton();
  listTag.appendChild(spanTag);
  listTag.appendChild(completeButtonTag);
  listTag.appendChild(deleteButtonTag);
  $todoList.appendChild(listTag);
  hiddenClass();
}

function goDoneList(event) {
  let temporaryStorage = [];
  $hidden.style.display = 'block';

  const todoList = event.target.parentElement;
  temporaryStorage = todoListArray.filter(
    (todo) => todo.id === Number(todoList.id)
  );
  doneTodoArray.push(temporaryStorage[0]);

  todoListArray = todoListArray.filter(
    (todo) => todo.id !== Number(todoList.id)
  );

  printDoneList(doneTodoArray);
  todoList.remove();
}

function printDoneList(newDone) {
  const listTag = createDoneList(newDone);
  const spanTag = createDoneSpan(newDone);
  const comebackButtonTag = createComebackButton();
  const deleteButtonTag = createDoneButton();
  listTag.appendChild(spanTag);
  listTag.appendChild(comebackButtonTag);
  listTag.appendChild(deleteButtonTag);
  $doneList.appendChild(listTag);
}
function createDoneList(newDone) {
  const list = document.createElement('li');
  list.id = newDone[newDone.length - 1].id;
  return list;
}
function createDoneSpan(newDone) {
  const span = document.createElement('span');
  span.innerText = newDone[newDone.length - 1].text;
  return span;
}
function createComebackButton() {
  const button = document.createElement('button');
  button.id = 'DoneComebackButton';
  button.innerText = '↩️';
  button.addEventListener('click', comebackDone);
  return button;
}
function createDoneButton() {
  const button = document.createElement('button');
  button.id = 'DoneButtonX';
  button.innerText = '🗑️';
  button.addEventListener('click', deleteDone);
  return button;
}

function printToDo(newTodo) {
  const listTag = createTodoList(newTodo);
  const spanTag = createTodoSpan(newTodo);
  const completeButton = createCompleteButton();
  const deleteButton = createTodoDeleteButton();
  listTag.appendChild(spanTag);
  listTag.appendChild(completeButton);
  listTag.appendChild(deleteButton);
  $todoList.appendChild(listTag);
}
function createTodoList(newTodo) {
  const list = document.createElement('li');
  list.id = newTodo.id;
  return list;
}
function createTodoSpan(newTodo) {
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  return span;
}
function createCompleteButton() {
  const buttonO = document.createElement('button');
  buttonO.id = 'TodoButtonO';
  buttonO.innerText = '🗸';
  buttonO.addEventListener('click', goDoneList);
  return buttonO;
}
function createTodoDeleteButton() {
  const buttonX = document.createElement('button');
  buttonX.id = 'TodoButtonX';
  buttonX.innerText = '🗑️';
  buttonX.addEventListener('click', deleteTodo);
  return buttonX;
}

function submitListHandler(event) {
  event.preventDefault();
  const newTodo = $todoInput.value;
  $todoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Math.random() * 10,
  };
  todoListArray.push(newTodoObj);
  printToDo(newTodoObj);
}

$writeForm.addEventListener('submit', submitListHandler);

function printClock() {
  const clockTag = document.getElementById('clock');
  clockTag.innerText = new Date().toLocaleString();
  setTimeout('printClock()', 1000);
}
printClock();
