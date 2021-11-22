class TodoListController {
  constructor() {
    this.todoListArray = [];
    this.doneTodoArray = [];
  }

  submitListHandler = (e) => {
    e.preventDefault();
    const newTodo = $todoInput.value;
    $todoInput.value = '';
    const newTodoObj = {
      text: newTodo,
      id: Math.random(),
    };
    this.todoListArray.push(newTodoObj);
    this.printToDo(newTodoObj);
  };

  printToDo = (newTodo) => {
    const todoListTag = this.createTodoList(newTodo);
    this.createSpanTag(newTodo, todoListTag);
    this.createCompleteButton(todoListTag);
    this.createTodoDeleteButton(todoListTag);
  };
  createTodoList = (newTodo) => {
    const todoListTag = document.createElement('li');
    todoListTag.id = newTodo.id;
    $todoList.appendChild(todoListTag);
    return todoListTag;
  };
  createSpanTag = (newTodo, todoListTag) => {
    const spanTag = document.createElement('span');
    spanTag.innerText = newTodo.text;
    todoListTag.appendChild(spanTag);
  };

  createTodoDeleteButton = (todoListTag) => {
    const deleteButton = document.createElement('button');
    deleteButton.id = 'TodoButtonX';
    deleteButton.innerText = '🗑️';
    todoListTag.appendChild(deleteButton);
    deleteButton.addEventListener('click', this.deleteTodo);
  };

  deleteTodo = (e) => {
    const selectedList = e.target.parentElement;
    selectedList.remove();
    this.todoListArray = this.todoListArray.filter(
      (list) => list.id !== Number(selectedList.id)
    );
  };
  createCompleteButton = (todoListTag) => {
    const completeButton = document.createElement('button');
    completeButton.id = 'TodoButtonO';
    completeButton.innerText = '🗸';
    todoListTag.appendChild(completeButton);
    completeButton.addEventListener('click', this.goDoneList);
  };
  goDoneList = (e) => {
    $hidden.style.display = 'block';
    const selectedTodoList = e.target.parentElement;
    const temporaryStorage = this.todoListArray.filter(
      (todo) => todo.id === Number(selectedTodoList.id)
    );
    this.doneTodoArray.push(temporaryStorage[0]);
    this.todoListArray = this.todoListArray.filter(
      (todo) => todo.id !== Number(selectedTodoList.id)
    );
    this.printDoneList(this.doneTodoArray);
    selectedTodoList.remove();
  };

  printDoneList = (doneValue) => {
    const DoneListTag = this.createDoneList(doneValue);
    $doneList.appendChild(DoneListTag);
    this.createDoneSpanTag(doneValue, DoneListTag);
    this.createComebackButton(DoneListTag);
    this.createDoneDeleteButton(DoneListTag);
  };
  createDoneList = (doneValue) => {
    const DoneListTag = document.createElement('li');
    DoneListTag.id = doneValue[doneValue.length - 1].id;
    return DoneListTag;
  };
  createDoneSpanTag = (doneValue, listTag) => {
    const doneSpanTag = document.createElement('span');
    doneSpanTag.innerText = doneValue[doneValue.length - 1].text;
    listTag.appendChild(doneSpanTag);
  };
  createComebackButton = (DoneListTag) => {
    const comebackButton = document.createElement('button');
    comebackButton.id = 'DoneComebackButton';
    comebackButton.innerText = '↩️';
    DoneListTag.appendChild(comebackButton);
    comebackButton.addEventListener('click', this.comebackDone);
  };
  createDoneDeleteButton = (DoneListTag) => {
    const DoneDeleteButton = document.createElement('button');
    DoneDeleteButton.id = 'DoneButtonX';
    DoneDeleteButton.innerText = '🗑️';
    DoneListTag.appendChild(DoneDeleteButton);
    DoneDeleteButton.addEventListener('click', this.deleteDone);
  };
  deleteDone = (e) => {
    const selectedList = e.target.parentElement;
    selectedList.remove();
    this.doneTodoArray = this.doneTodoArray.filter(
      (done) => done.id !== Number(selectedList.id)
    );
    this.hiddenClass();
  };

  comebackDone = (e) => {
    const selectedDoneList = e.target.parentElement;
    const temporaryStorage = this.doneTodoArray.filter(
      (done) => done.id === Number(selectedDoneList.id)
    );
    this.todoListArray.push(temporaryStorage[0]);

    this.doneTodoArray = this.doneTodoArray.filter(
      (done) => done.id !== Number(selectedDoneList.id)
    );

    this.goTodoList(this.todoListArray);
    selectedDoneList.remove();
  };

  goTodoList = (doneValue) => {
    const DoneListTag = this.createDoneList(doneValue);
    $todoList.appendChild(DoneListTag);
    this.createDoneSpanTag(doneValue, DoneListTag);
    this.createCompleteButton(DoneListTag);
    this.createTodoDeleteButton(DoneListTag);
    this.hiddenClass();
  };

  hiddenClass() {
    console.log(this.doneTodoArray);
    if (this.doneTodoArray.length === 0) {
      $hidden.style.display = 'none';
    }
  }
}
const $todoInput = document.querySelector('#writeForm input');
const $todoList = document.querySelector('#todoList');
const $doneList = document.querySelector('#doneList');
const $hidden = document.querySelector('.hidden');

const myTodoList = new TodoListController();
document
  .querySelector('#writeForm')
  .addEventListener('submit', myTodoList.submitListHandler);

(function printClock() {
  const clockTag = document.getElementById('clock');
  clockTag.innerText = new Date().toLocaleString();
  setTimeout(printClock, 1000);
})();
