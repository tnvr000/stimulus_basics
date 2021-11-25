import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['tasksContainer', 'taskToAdd']
  addTask() {
    if(this.taskToAddTarget.value.length == 0) {
      alert('Please enter a task');
    }
    this.tasksContainerTarget.innerHTML += `
      <div class="task">
        <span id="taskname">
          ${ this.taskToAddTarget.value }
        </span>
        <button class="delete" data-action="todo#deleteTask">
          Delete
        </button>
      </div>
    `;
    this.taskToAddTarget.value = '';
  }

  deleteTask(event) {
    event.target.parentNode.remove();
  }
}
