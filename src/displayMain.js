import { DOM } from "./DOMaccess";
import { addTaskForm } from "./task.js";

export function defaultSetup() {
  const main = DOM.getMain();
  main.classList.add("main");

  const mainTitle = document.createElement("h2");
  mainTitle.classList.add("mainTitle");
  mainTitle.innerText = "Default";

  const mainContent = document.createElement("ul");
  mainContent.classList.add("mainContent");

  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("addTaskBtn");
  addTaskBtn.addEventListener("click", (e) => addTaskForm(e));
  addTaskBtn.innerHTML = "<i class='fa-solid fa-plus'></i> Add Task";

  mainContent.appendChild(addTaskBtn);

  main.appendChild(mainTitle);
  main.append(mainContent);
}

export function displayInbox() {}

export function displayToday() {}

export function displayThisWeek() {}
