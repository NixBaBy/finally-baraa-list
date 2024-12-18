const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks();
const addTask = () => {
  const task = taskInput.value.trim();

  if (task) {
    createTaskElement(task);
    taskInput.value = "";
    saveTasks();
  } else {
    alert("baraagaa oruulna uu");
  }
};

addButton.addEventListener("click", addTask);
function createTaskElement(task) {
  const listItem = document.createElement("li");
  listItem.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteTask";

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(listItem);
    saveTasks();
  });
}

function saveTasks() {
  let tasks = [];
  taskList.querySelectorAll("li").forEach(function (item) {
    tasks.push(item.textContent.replace("Delete", "").trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(createTaskElement);
}

// login
let user = localStorage.getItem("user");
if (user) {
  let parsedUser = JSON.parse(user);
  document.getElementById(
    "welcomeMessage"
  ).innerHTML = `Hello Admin ${parsedUser.name}`;
  document.getElementById("logoutButton").classList.remove("hidden");
} else {
  document.getElementById(
    "welcomeMessage"
  ).innerHTML = `Hello, please <a href ='login.html' > login </a> `;
}
document.getElementById("logoutButton").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "../login/login.html";
});
