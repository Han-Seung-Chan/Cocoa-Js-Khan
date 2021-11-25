export class ModelController {
  constructor() {
    this.$hidden = document.querySelector('.hidden');
    this.todoListArray = [];
    this.doneTodoArray = [];
  }

  addData = (newTodo) => {
    const newTodoObj = {
      text: newTodo,
      id: Math.random(),
    };
    this.todoListArray.push(newTodoObj);
    return newTodoObj;
  };

  deleteDone = (e) => {
    const selectedList = e.target.parentElement;
    selectedList.remove();
    this.doneTodoArray = this.doneTodoArray.filter(
      (done) => done.id !== Number(selectedList.id)
    );
    this.hiddenClass();
  };

  deleteTodo = (e) => {
    const selectedList = e.target.parentElement;
    selectedList.remove();
    this.todoListArray = this.todoListArray.filter(
      (list) => list.id !== Number(selectedList.id)
    );
  };

  hiddenClass() {
    if (this.doneTodoArray.length === 0) {
      this.$hidden.style.display = 'none';
    }
  }
}
