export class ViewController {
  constructor(model) {
    this.model = model;
    this.$todoList = document.querySelector('#todoList');
    this.$doneList = document.querySelector('#doneList');
  }
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

  createDoneDeleteButton = (doneListTag) => {
    const doneDeleteButton = document.createElement('button');
    doneDeleteButton.id = 'DoneButtonX';
    doneDeleteButton.innerText = '🗑️';
    doneListTag.appendChild(doneDeleteButton);
    doneDeleteButton.addEventListener('click', this.model.deleteDone);
  };

  createTodoDeleteButton = (todoListTag) => {
    const deleteButton = document.createElement('button');
    deleteButton.id = 'TodoButtonX';
    deleteButton.innerText = '🗑️';
    todoListTag.appendChild(deleteButton);
    deleteButton.addEventListener('click', this.model.deleteTodo);
  };

  createCompleteButton = (listTag) => {
    const completeButton = document.createElement('button');
    completeButton.id = 'TodoButtonO';
    completeButton.innerText = '✔️';
    listTag.appendChild(completeButton);
    return completeButton;
  };

  createComebackButton = (doneListTag) => {
    const comebackButton = document.createElement('button');
    comebackButton.id = 'DoneComebackButton';
    comebackButton.innerText = '↩️';
    doneListTag.appendChild(comebackButton);
    return comebackButton;
  };

  showDoneText() {
    return (this.model.$hidden.style.display = 'block');
  }
}
