const input = document.querySelector("#input input");
const tasksDiv = document.querySelector("#tasks-div");
const logo = document.querySelector("#logo");

let tasksBackup = JSON.parse(localStorage.getItem("tasks")) || [];
tasksBackup.forEach(taskText => CreateTasks(taskText));

function CreateTasks(taskText){
  if(taskText.trim() === "") return;

  const taskCard = document.createElement('li');  
  taskCard.classList.add('tasks-card');

  const button = document.createElement('button');
  button.classList.add('button');
  button.addEventListener('click', function(){
    if (task.style.textDecoration === "line-through") {
      task.style.textDecoration = "none";
      button.textContent = "";
      button.classList.remove('done');
    } else {
      task.style.textDecoration = "line-through";
      button.textContent = "✓";
      button.classList.add('done');
    }
  });
  taskCard.appendChild(button);
  
  const task = document.createElement('p');
  task.textContent = taskText;
  taskCard.appendChild(task);

  const deleteTask = document.createElement('div');
  deleteTask.classList.add('delete-task');
  deleteTask.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e97ca8"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>'
  deleteTask.addEventListener('click', function(){
    let newArray = [];
    tasksBackup.forEach(function(oneTaskBackup) {
      if (oneTaskBackup !== taskText) {
        newArray.push(oneTaskBackup);
      }
    });
    tasksBackup = newArray;
    localStorage.setItem("tasks", JSON.stringify(tasksBackup));
    taskCard.remove();
  });

  tasksDiv.appendChild(taskCard);
  taskCard.appendChild(deleteTask);
}

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const value = input.value.trim();
    if (value === "") return;
    tasksBackup.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasksBackup));
    CreateTasks(value);
    input.value = "";
  }
})

logo.addEventListener('click', function() {
  location.reload();
})