class View {
  constructor(htmlElement) {
    this._htmlElement = htmlElement;
  }
  template() {
    throw new Error("function need's to be implemented by son");
  }
  render(model) {
    this._htmlElement.innerHTML = this.template(model);
  }
}
