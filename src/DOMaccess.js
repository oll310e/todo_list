const DOM = {
  container: document.querySelector(".container"),
  getContainer() {
    return this.container;
  },
  getMain() {
    return document.querySelector(".main");
  },
  getMainContent() {
    return document.querySelector(".mainContent");
  },
  getTaskForm() {
    return document.querySelector(".taskForm");
  },
};

export { DOM };
