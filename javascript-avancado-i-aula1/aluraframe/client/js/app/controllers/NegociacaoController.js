class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
  }

  addNegociation(event) {
    event.preventDefault();

    this._listaNegociacoes.setNegociacao(_createNegociation());
    console.log(this._listaNegociacoes.negociacoes);
  }

  _createNegociation() {
    return new Negociacao(
      DateHelper.textToDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }
  _resetForm() {
    this._inputData.value = '';
    this._inputQuantidade.value = '1';
    this._inputValor = '0.0';

    this._inputData.focus();
  }
}
