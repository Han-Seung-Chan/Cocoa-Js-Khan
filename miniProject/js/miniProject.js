const $ = (selector) => document.querySelector(selector);

(function printClock() {
  const $clock = $('.clock');
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const mins = today.getMinutes();
  $clock.innerText = `${month}월 ${date}일 ${hour}:${
    mins < 10 ? '0' : ''
  }${mins}`;
  setTimeout(printClock, 1000);
})();

class TimerController {
  constructor() {
    this.$displayTimer = $('.displayTimer');
    this.$endTime = $('.displayEndTime');
    this.countdown;
    this.timeArray = [];
  }

  timerLoop(seconds) {
    clearInterval(this.countdown);

    const nowTime = Date.now();
    const finishTime = nowTime + seconds * 1000;
    this.showTimeRemaining(seconds);
    this.showEndTime(finishTime);
    this.countdown = setInterval(() => {
      const secondsRemaining = Math.round((finishTime - Date.now()) / 1000);
      this.timeArray.unshift();
      this.timeArray.push(secondsRemaining);
      if (secondsRemaining < 0) {
        clearInterval(this.countdown);
        return;
      }
      this.showTimeRemaining(secondsRemaining);
    }, 1000);
  }

  showTimeRemaining(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const timeText = `${minutes}:${
      remainingSeconds < 10 ? '0' : ''
    }${remainingSeconds}`;
    this.$displayTimer.innerText = timeText;
    document.title = timeText;
  }

  showEndTime(finishTime) {
    const end = new Date(finishTime);
    const hour = end.getHours();
    const mins = end.getMinutes();
    this.$endTime.innerText = `종료시간 : ${hour}:${
      mins < 10 ? '0' : ''
    }${mins}`;
  }

  startButtonTimer() {
    const seconds = Number(this.dataset.time);
    myTimer.timerLoop(seconds);
  }

  startTimer(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    myTimer.timerLoop(mins * 60);
    this.reset();
  }

  todoTimerStart(time) {
    const mins = time;
    myTimer.timerLoop(mins * 60);
  }

  clearTimer() {
    clearInterval(this.countdown);
    this.$displayTimer.innerText = '00:00';
    this.$endTime.innerText = '';
    document.title = 'Timer';
  }

  stopTimer() {
    clearInterval(this.countdown);
  }

  restartTimer() {
    const seconds = this.timeArray[this.timeArray.length - 1];
    myTimer.timerLoop(seconds);
  }
}

const myTimer = new TimerController();

$timerButtons = document.querySelectorAll('[data-time]');
$timerButtons.forEach((button) =>
  button.addEventListener('click', myTimer.startButtonTimer)
);
document.minutesForm.addEventListener('submit', myTimer.startTimer);

const $restartTimer = $('#restartTimer');
$restartTimer.addEventListener('click', myTimer.restartTimer.bind(myTimer));

const $clearTimer = $('#clearTimer');
$clearTimer.addEventListener('click', myTimer.clearTimer.bind(myTimer));

const $stopTimer = $('#stopTimer');
$stopTimer.addEventListener('click', myTimer.stopTimer.bind(myTimer));

//----------todoList----------//
class TodoListController {
  constructor() {
    this.todoListArray = [];
    this.doneTodoArray = [];
    this.$manyTime = $('.manyTime');
    this.makeElement = (el) => document.createElement(el);
  }

  submitListHandler = (e) => {
    e.preventDefault();
    this.$todoInput = $('.writeForm input');
    const newTodo = this.$todoInput.value;
    this.$todoInput.value = '';
    const newTodoObj = {
      text: newTodo,
      id: Math.random(),
      currentStatus: 0,
    };
    this.todoListArray.push(newTodoObj);

    this.$manyTime.innerText = `공부 할 목록 : ${
      this.todoListArray[this.todoListArray.length - 1].text
    }

    공부 할 시간 : 
    `;
    this.setStudyTimeButton(this.$manyTime);
  };

  setStudyTimeButton = ($manyTime) => {
    const timeData = ['없음', '25분', '50분', '60분', '120분', '180분'];
    for (let i = 0; i < timeData.length; i++) {
      const checkTime = this.makeElement('button');
      checkTime.className = 'timeButton';
      checkTime.innerText = `${timeData[i]}`;
      $manyTime.appendChild(checkTime);
      checkTime.addEventListener('click', this.setStudyTime);
    }
  };

  setStudyTime = (e) => {
    const studyTime = e.target.textContent;
    this.printToDo(
      this.todoListArray[this.todoListArray.length - 1],
      studyTime
    );
  };

  printToDo = (newTodo, studyTime) => {
    this.$manyTime.innerText = '';
    const todoListTag = this.createTodoList(newTodo);
    this.createSpanTag(newTodo, todoListTag);
    this.createCompleteButton(todoListTag);
    this.createTodoDeleteButton(todoListTag);
    if (studyTime !== '없음') {
      this.create10minutesButton(todoListTag, studyTime);
      this.createTimePlayButton(todoListTag, studyTime);
      this.createBarDivTag(todoListTag, studyTime);
    }
  };

  createTodoList = (newTodo) => {
    this.$todoList = $('#todoList');
    const todoListTag = this.makeElement('li');
    todoListTag.id = newTodo.id;
    this.$todoList.appendChild(todoListTag);
    return todoListTag;
  };

  createSpanTag = (newTodo, todoListTag) => {
    const spanTag = this.makeElement('span');
    spanTag.className = 'textSpanTag';
    spanTag.innerText = newTodo.text;
    todoListTag.appendChild(spanTag);
  };

  createCompleteButton = (todoListTag) => {
    const completeButton = this.makeElement('button');
    completeButton.id = 'TodoButtonO';
    completeButton.innerText = '✔️';
    todoListTag.appendChild(completeButton);
    completeButton.addEventListener('click', this.goDoneList);
  };

  goDoneList = (e) => {
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

  createTodoDeleteButton = (todoListTag) => {
    const deleteButton = this.makeElement('button');
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

  create10minutesButton = (todoListTag, studyTime) => {
    const minutes10Button = this.makeElement('button');
    minutes10Button.id = 'minutes10Button';
    minutes10Button.innerText = '🔟';
    todoListTag.appendChild(minutes10Button);
    minutes10Button.addEventListener('click', (e) => {
      this.paintBar(studyTime, e);
    });
  };

  paintBar = (studyTime, e) => {
    const coloring = e.target.parentElement.querySelector('.coloring');
    const selectedList = e.target.parentElement;
    let a = this.todoListArray.filter((list) => list.id == selectedList.id);
    const len = Math.ceil((10 / parseInt(studyTime)) * 100);

    this.todoListArray = this.todoListArray.map((todo) =>
      todo.id == selectedList.id
        ? {
            id: todo.id,
            text: todo.text,
            currentStatus: todo.currentStatus + len,
          }
        : todo
    );
    coloring.innerText = `${len + Number(a[0]['currentStatus'])}%`;
    coloring.style.width = `${len + Number(a[0]['currentStatus']) * 3}px`;

    if (len + Number(a[0]['currentStatus']) >= 100) {
      coloring.innerText = `${100}%`;
      coloring.style.width = `${300}px`;
      this.goDoneList(e);
      e.target.removeEventListener('click', this.paintBar);
    }
  };

  createTimePlayButton(todoListTag, studyTime) {
    const timePlayButton = this.makeElement('button');
    timePlayButton.id = 'timePlayButton';
    timePlayButton.innerText = '▶';
    todoListTag.appendChild(timePlayButton);
    timePlayButton.addEventListener('click', () => {
      this.palyTimer(studyTime);
    });
  }
  palyTimer = (studyTime) => {
    myTimer.todoTimerStart(parseInt(studyTime));
  };

  createBarDivTag = (todoListTag, studyTime) => {
    const coloring = this.makeElement('div');
    coloring.className = 'coloring';
    coloring.innerText = '0%';
    todoListTag.appendChild(coloring);
    const barDivTag = this.makeElement('div');
    barDivTag.className = 'barDivTag';
    barDivTag.innerText = studyTime;
    todoListTag.appendChild(barDivTag);
  };

  printDoneList = (doneValue) => {
    this.$doneList = $('#doneList');
    const DoneListTag = this.createDoneList(doneValue);
    this.$doneList.appendChild(DoneListTag);
    this.createDoneSpanTag(doneValue, DoneListTag);
    this.createDoneDeleteButton(DoneListTag);
  };

  createDoneList = (doneValue) => {
    const DoneListTag = this.makeElement('li');
    DoneListTag.id = doneValue[doneValue.length - 1].id;
    return DoneListTag;
  };

  createDoneSpanTag = (doneValue, listTag) => {
    const doneSpanTag = this.makeElement('span');
    doneSpanTag.className = 'textSpanTag';
    doneSpanTag.innerText = doneValue[doneValue.length - 1].text;
    listTag.appendChild(doneSpanTag);
  };

  createDoneDeleteButton = (DoneListTag) => {
    const DoneDeleteButton = this.makeElement('button');
    DoneDeleteButton.id = 'doneButtonX';
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
  };
}

const myTodoList = new TodoListController();

document
  .querySelector('.writeForm')
  .addEventListener('submit', myTodoList.submitListHandler);
