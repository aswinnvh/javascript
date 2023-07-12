const buttonToList = document.getElementById("addList");
buttonToList.addEventListener("click", addTask);

function addTask() {
  var taskInput = document.getElementById("inputTask");
  var taskList = document.getElementById("listAllTasks");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    var newTask = document.createElement("li");
    newTask.innerText = taskText;

    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}


