import { DOM } from "./DOMaccess";
import { addTaskBtn } from "./displayMain";

export function addTaskForm(e) {
  const taskForm = document.createElement("form");
  taskForm.classList.add("taskForm");

  const taskInput = document.createElement("input");
  taskInput.id = "taskInput";

  const taskAddBtn = document.createElement("button");
  taskAddBtn.setAttribute("type", "button");
  taskAddBtn.classList.add("taskAddBtn");
  taskAddBtn.innerText = "Add";
  taskAddBtn.addEventListener("click", (e) => {
    if (e.target.parentNode.firstChild.value != "") {
      addTask(e);
      removeTaskForm();
      addTaskBtn();
    } else {
      alert("Please name your task.");
    }
  });

  const taskCancelBtn = document.createElement("button");
  taskCancelBtn.setAttribute("type", "button");
  taskCancelBtn.classList.add("taskCancelBtn");
  taskCancelBtn.innerText = "Cancel";
  taskCancelBtn.addEventListener("click", (e) => {
    removeTaskForm();
    addTaskBtn();
  });

  taskForm.appendChild(taskInput);
  taskForm.appendChild(taskAddBtn);
  taskForm.appendChild(taskCancelBtn);
  DOM.getMainContent().appendChild(taskForm);
}

export function addTask(e) {
  const task = document.createElement("li");
  task.classList.add("task");

  const taskText = document.createElement("p");
  taskText.innerHTML = `${DOM.getTaskForm().firstChild.value}`;

  const removeTaskBtn = document.createElement("button");
  removeTaskBtn.classList.add("removeTaskBtn");
  removeTaskBtn.innerText = "X";
  removeTaskBtn.addEventListener("click", (e) => {
    removeListItem(e);
  });

  task.appendChild(removeTaskBtn);
  task.appendChild(taskText);

  DOM.getMainContent().appendChild(task);
}

function removeListItem(e) {
  e.target.parentNode.remove();
}

export function removeTaskForm() {
  console.log(DOM.getTaskForm());
  DOM.getTaskForm().remove();
}
