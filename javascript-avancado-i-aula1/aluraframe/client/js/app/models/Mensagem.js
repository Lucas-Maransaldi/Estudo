class Mensagem {
  constructor(renderTrigger, mensagem = '') {
    this._mensagem = mensagem;
    this._renderTrigger = renderTrigger;
  }

  get mensagem() {
    return this._mensagem;
  }
  set mensagem(mensagem) {
    this._mensagem = mensagem;
    this._renderTrigger(this);
  }
}
