const DOM = {
  container: document.querySelector(".container"),
  getContainer() {
    return this.container;
  },

  getMain() {
    return document.querySelector(".main");
  },
};

export { DOM };
