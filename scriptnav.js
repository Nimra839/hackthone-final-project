function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active');
}


function addTask(status) {
  const title = prompt('Enter Task Title');
  if (!title) return;

  const assignedTo = prompt('Assign to (User Name)');
  if (!assignedTo) return;

  const taskCard = document.createElement('div');
  taskCard.className = 'task-card';

  taskCard.innerHTML = `
    <h3>${title}</h3>
    <p>Assigned to: ${assignedTo}</p>
    <div class="task-buttons">
      ${status !== 'done' ? `<button onclick="moveTask(this)">Move</button>` : ''}
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  document.getElementById(`${status}-tasks`).appendChild(taskCard);
}

function moveTask(button) {
  const taskCard = button.closest('.task-card');
  const parentId = taskCard.parentElement.id;

  if (parentId === 'todo-tasks') {
    document.getElementById('inprogress-tasks').appendChild(taskCard);
  } else if (parentId === 'inprogress-tasks') {
    document.getElementById('done-tasks').appendChild(taskCard);
    
    button.remove();
  }
}

function deleteTask(button) {
  const taskCard = button.closest('.task-card');
  taskCard.remove();
}

