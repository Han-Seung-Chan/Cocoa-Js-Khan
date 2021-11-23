class ModelController {
  constructor() {
    this.todoListArray = [];
    this.doneTodoArray = [];
    this.$todoInput = document.querySelector('#writeForm input');
    this.$hidden = document.querySelector('.hidden');
  }

  submitListHandler = (e) => {
    e.preventDefault();
    const newTodo = this.$todoInput.value;
    this.$todoInput.value = '';
    const newTodoObj = {
      text: newTodo,
      id: Math.random(),
    };
    this.todoListArray.push(newTodoObj);
    view.printToDo(newTodoObj);
  };

  createTodoList = (newTodo) => {
    const todoListTag = document.createElement('li');
    todoListTag.id = newTodo.id;
    return todoListTag;
  };

  createSpanTag = (newTodo, todoListTag) => {
    const spanTag = document.createElement('span');
    spanTag.innerText = newTodo.text;
    todoListTag.appendChild(spanTag);
  };

  deleteTodo = (e) => {
    const selectedList = e.target.parentElement;
    selectedList.remove();
    this.todoListArray = this.todoListArray.filter(
      (list) => list.id !== Number(selectedList.id)
    );
  };

  goDoneList = (e) => {
    this.$hidden.style.display = 'block';
    const selectedTodoList = e.target.parentElement;
    const temporaryStorage = this.todoListArray.filter(
      (todo) => todo.id === Number(selectedTodoList.id)
    );
    this.doneTodoArray.push(temporaryStorage[0]);
    this.todoListArray = this.todoListArray.filter(
      (todo) => todo.id !== Number(selectedTodoList.id)
    );
    view.printDoneList(this.doneTodoArray);
    selectedTodoList.remove();
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

    view.goTodoList(this.todoListArray);
    selectedDoneList.remove();
  };

  hiddenClass() {
    if (this.doneTodoArray.length === 0) {
      this.$hidden.style.display = 'none';
    }
  }
}

class ViewController {
  constructor() {
    this.$todoList = document.querySelector('#todoList');
    this.$doneList = document.querySelector('#doneList');
  }
  goTodoList = (doneValue) => {
    const doneListTag = model.createDoneList(doneValue);
    this.$todoList.appendChild(doneListTag);
    model.createDoneSpanTag(doneValue, doneListTag);
    this.createCompleteButton(doneListTag);
    this.createTodoDeleteButton(doneListTag);
    model.hiddenClass();
  };

  printDoneList = (doneValue) => {
    const doneListTag = model.createDoneList(doneValue);
    this.$doneList.appendChild(doneListTag);
    model.createDoneSpanTag(doneValue, doneListTag);
    this.createComebackButton(doneListTag);
    this.createDoneDeleteButton(doneListTag);
  };

  printToDo = (newTodo) => {
    const todoListTag = model.createTodoList(newTodo);
    this.$todoList.appendChild(todoListTag);
    model.createSpanTag(newTodo, todoListTag);
    this.createCompleteButton(todoListTag);
    this.createTodoDeleteButton(todoListTag);
  };

  createDoneDeleteButton = (doneListTag) => {
    const doneDeleteButton = document.createElement('button');
    doneDeleteButton.id = 'DoneButtonX';
    doneDeleteButton.innerText = '🗑️';
    doneListTag.appendChild(doneDeleteButton);
    doneDeleteButton.addEventListener('click', model.deleteDone);
  };

  createTodoDeleteButton = (todoListTag) => {
    const deleteButton = document.createElement('button');
    deleteButton.id = 'TodoButtonX';
    deleteButton.innerText = '🗑️';
    todoListTag.appendChild(deleteButton);
    deleteButton.addEventListener('click', model.deleteTodo);
  };

  createCompleteButton = (todoListTag) => {
    const completeButton = document.createElement('button');
    completeButton.id = 'TodoButtonO';
    completeButton.innerText = '✔️';
    todoListTag.appendChild(completeButton);
    completeButton.addEventListener('click', model.goDoneList);
  };

  createComebackButton = (doneListTag) => {
    const comebackButton = document.createElement('button');
    comebackButton.id = 'DoneComebackButton';
    comebackButton.innerText = '↩️';
    doneListTag.appendChild(comebackButton);
    comebackButton.addEventListener('click', model.comebackDone);
  };
}

const model = new ModelController();
const view = new ViewController();
document
  .querySelector('#writeForm')
  .addEventListener('submit', model.submitListHandler.bind(model));

(function printClock() {
  const clockTag = document.getElementById('clock');
  clockTag.innerText = new Date().toLocaleString();
  setTimeout(printClock, 1000);
})();
