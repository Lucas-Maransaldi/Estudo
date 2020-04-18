class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._listaNegociacoes = new ListaNegociacoes((model) => {
      this._negociacoesView.render(model);
    });

    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._negociacoesView.render(this._listaNegociacoes);

    this._mensagem = new Mensagem((model) => {
      this._mensagemView.render(model);
    });
    this._mensagemView = new MensagemView($('#MensagemView'));
    this._mensagemView.render(this._mensagem);
  }

  addNegotiation(event) {
    event.preventDefault();

    this._listaNegociacoes.setNegociacao(this._createNegociation());

    this._mensagem.mensagem = 'negociacao adicionada com sucesso';
    this._resetForm();
    console.log(this._listaNegociacoes.negociacoes);
  }

  deletAllNegotiation() {
    this._listaNegociacoes.emptyList();
    this._mensagem.mensagem = 'nogiciacoes removidas com sucesso';
    // this._resetForm();
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
    this._inputValor.value = '0.0';

    this._inputData.focus();
  }
}
