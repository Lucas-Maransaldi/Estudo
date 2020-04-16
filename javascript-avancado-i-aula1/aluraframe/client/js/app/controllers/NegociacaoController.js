class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#MensagemView'));

    this._mensagemView.render(this._mensagem);
    this._negociacoesView.render(this._listaNegociacoes);
  }

  addNegociation(event) {
    event.preventDefault();

    this._listaNegociacoes.setNegociacao(this._createNegociation());
    this._negociacoesView.render(this._listaNegociacoes);

    this._mensagem.mensagem = 'negociacao adicionada com sucesso';
    this._mensagemView.render(this._mensagem);

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
