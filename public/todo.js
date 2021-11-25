document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#push').addEventListener('click', function() {
    if(document.querySelector('#newtask input').value.length == 0) {
      alert('please Enter a task');
    } else {
      document.querySelector('#tasks').innerHTML += `
        <div class="task">
          <span classid="taskname">
            ${document.querySelector('#newtask input').value}
          </span>
          <button class="delete">
            <i class="far fa-trash-alt></i>
          </button>
      `;
      document.querySelector('#newtask input').value = '';

      var current_tasks = document.querySelectorAll('.delete');
      for(var i=0; i < current_tasks.length; ++i) {
        current_tasks[i].addEventListener('click', function() {
          this.parentNode.remove();
        })
      }
    }
  });
});