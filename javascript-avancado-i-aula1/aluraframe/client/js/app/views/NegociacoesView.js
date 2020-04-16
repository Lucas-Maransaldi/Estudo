class NegociacoesView extends View {
  template(model) {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
    
            <tbody id="corpo-tabela">
            </tbody>
            ${model.negociacoes
              .map((negociacao) => {
                return `
                <tr>
                    <td>${DateHelper.dateToText(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
                
                `;
              })
              .join('')}
            <tfoot>
              <td colspan="3"></td>
              <td>${model.negociacoes.reduce((total, negociacao) => {
                return total + negociacao.volume;
              }, 0.0)}
              </td>
            </tfoot>
        </table>
        `;
  }
}

/*
    <table class="table table-hover table-bordered">
    <thead>
        <tr>
        <th>DATA</th>
        <th>QUANTIDADE</th>
        <th>VALOR</th>
        <th>VOLUME</th>
        </tr>
    </thead>

    <tbody id="corpo-tabela"></tbody>

    <tfoot></tfoot>
    </table>
*/
