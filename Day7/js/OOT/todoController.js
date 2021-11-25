export class TodoController {
  constructor(ModelController, ViewController) {
    this.model = ModelController;
    this.view = ViewController;
    this.$todoList = document.querySelector('#todoList');
    this.$doneList = document.querySelector('#doneList');
    this.$todoInput = document.querySelector('#writeForm input');
  }

  startTodoList = () => {
    document
      .querySelector('#writeForm')
      .addEventListener('submit', this.submitListHandler);
  };

  submitListHandler = (e) => {
    e.preventDefault();
    const newTodo = this.$todoInput.value;
    let todoDataObj = this.model.addData(newTodo);
    this.$todoInput.value = '';
    this.printToDo(todoDataObj);
  };

  goTodoList = (doneValue) => {
    const doneListTag = this.view.createDoneList(doneValue);
    this.$todoList.appendChild(doneListTag);
    this.view.createDoneSpanTag(doneValue, doneListTag);
    let completeButton = this.view.createCompleteButton(doneListTag);
    this.completeButtonEvent(completeButton);
    this.view.createTodoDeleteButton(doneListTag);
    this.model.hiddenClass();
  };

  printDoneList = (doneValue) => {
    const doneListTag = this.view.createDoneList(doneValue);
    this.$doneList.appendChild(doneListTag);
    this.view.createDoneSpanTag(doneValue, doneListTag);
    const comebackButton = this.view.createComebackButton(doneListTag);
    this.comebackButtonEvent(comebackButton);
    this.view.createDoneDeleteButton(doneListTag);
  };

  printToDo = (newTodo) => {
    const todoListTag = this.view.createTodoList(newTodo);
    this.$todoList.appendChild(todoListTag);
    this.view.createSpanTag(newTodo, todoListTag);
    let completeButton = this.view.createCompleteButton(todoListTag);
    this.completeButtonEvent(completeButton);
    this.view.createTodoDeleteButton(todoListTag);
  };

  goDoneList = (e) => {
    this.view.showDoneText();
    const selectedTodoList = e.target.parentElement;
    const temporaryStorage = this.model.todoListArray.filter(
      (todo) => todo.id === Number(selectedTodoList.id)
    );
    this.model.doneTodoArray.push(temporaryStorage[0]);
    this.model.todoListArray = this.model.todoListArray.filter(
      (todo) => todo.id !== Number(selectedTodoList.id)
    );
    this.printDoneList(this.model.doneTodoArray);
    selectedTodoList.remove();
  };

  comebackList = (e) => {
    const selectedDoneList = e.target.parentElement;
    const temporaryStorage = this.model.doneTodoArray.filter(
      (done) => done.id === Number(selectedDoneList.id)
    );
    this.model.todoListArray.push(temporaryStorage[0]);

    this.model.doneTodoArray = this.model.doneTodoArray.filter(
      (done) => done.id !== Number(selectedDoneList.id)
    );
    this.goTodoList(this.model.todoListArray);
    selectedDoneList.remove();
  };

  completeButtonEvent(completeButton) {
    completeButton.addEventListener('click', this.goDoneList);
  }

  comebackButtonEvent(comebackButton) {
    comebackButton.addEventListener('click', this.comebackList);
  }
}
