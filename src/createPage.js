import { DOM } from "./DOMaccess";

export function createPageLayout() {
  const container = DOM.getContainer();

  const header = document.createElement("div");
  header.classList.add("header");
  const headerTitle = document.createElement("h1");
  headerTitle.classList.add("headerTitle");
  headerTitle.innerText = "Title";
  header.appendChild(headerTitle);

  const menu = createMenu();

  const main = document.createElement("div");
  main.classList.add("main");

  const footer = document.createElement("div");
  footer.classList.add("footer");
  const footerTitle = document.createElement("h3");
  footerTitle.innerText = "Hello Footers";
  footer.appendChild(footerTitle);

  container.appendChild(header);
  container.appendChild(menu);
  container.appendChild(main);
  container.appendChild(footer);
}

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuSelectionList = document.createElement("ul");

  const menuSelectionInbox = document.createElement("li");
  menuSelectionInbox.classList.add("menuSelectionItem");
  menuSelectionInbox.innerHTML = "Inbox";
  menu.appendChild(menuSelectionInbox);

  const menuSelectionToday = document.createElement("li");
  menuSelectionToday.classList.add("menuSelectionItem");
  menuSelectionToday.innerHTML = "Today";
  menu.appendChild(menuSelectionToday);

  const menuSelectionThisWeek = document.createElement("li");
  menuSelectionThisWeek.classList.add("menuSelectionItem");
  menuSelectionThisWeek.innerHTML = "This Week";
  menu.appendChild(menuSelectionThisWeek);

  return menu;
}
