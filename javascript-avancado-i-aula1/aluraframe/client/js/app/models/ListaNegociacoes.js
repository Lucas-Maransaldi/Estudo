class ListaNegociacoes {
  constructor(renderTrigger) {
    this._negociacoes = [];
    this._renderTrigger = renderTrigger;
  }

  setNegociacao(negociacao) {
    this._negociacoes.push(negociacao);
    this._renderTrigger(this);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  emptyList() {
    this._negociacoes = [];
    this._renderTrigger(this);
  }
}
