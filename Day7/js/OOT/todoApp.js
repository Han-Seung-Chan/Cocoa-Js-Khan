import { ModelController } from './todoModel.js';
import { ViewController } from './todoView.js';
import { TodoController } from './todoController.js';

window.addEventListener('load', connectClass);

function connectClass() {
  const model = new ModelController();
  const view = new ViewController(model);
  const controller = new TodoController(model, view);
  controller.startTodoList();
}
