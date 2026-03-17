const input = document.querySelector("#input input");
const tasksDiv = document.querySelector("#tasks-div");
const logo = document.querySelector("#logo");

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    if(input.value.trim() === "") return;
    const taskCard = document.createElement('li');
    taskCard.classList.add('tasks-card');
    const button = document.createElement('button');
    button.classList.add('button');
    taskCard.appendChild(button);
    const task = document.createElement('p');
    task.textContent = input.value;
    taskCard.appendChild(task);
    const deleteTask = document.createElement('div');
    deleteTask.classList.add('delete-task');
    deleteTask.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e97ca8"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>'
    taskCard.appendChild(deleteTask);
    tasksDiv.appendChild(taskCard);
    input.value = "";

    button.addEventListener('click', function(){
      if (task.style.textDecoration === "line-through") {
        task.style.textDecoration = "none";
      } else {
        task.style.textDecoration = "line-through";
      }
    })

    deleteTask.addEventListener('click', function(){
      taskCard.remove();
    })
  }
})

logo.addEventListener('click', function() {
  location.reload();
})