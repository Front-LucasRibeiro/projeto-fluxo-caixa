class TransacoesView {

  // recebendo area onde o template string sera adicionado
  constructor(elemento){

    this._elemento = elemento;
  }

  _template(model) {
      
    return `
      <table class="extrato-table">
        <thead>
          <tr>
            <th>&nbsp</th>
            <th>Transação</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody id="resultados">
          ${model.transacoes.map(transacao => `
            
            <tr>
              <td class="text-center tipo ${transacao.tipo}"></td>
              <td>${transacao.nome}</td>
              <td>${transacao.valor}</td>
            </tr>

          `).join('')}
        </tbody>
        <tfoot>           
          </tr>
            <td>&nbsp</td>
            <td>Total</td>
            <td class="extrato-total">
              ${
                model.transacoes.reduce((total, transacao) => {
                  let tot = parseFloat(total);
                  let transacaoValor = parseFloat(transacao.valor);
                  let tipo = transacao.tipo;

                  if(tipo == 'venda'){
                    
                    return (tot + transacaoValor).toFixed(2);
                  }
                  
                  return (tot - transacaoValor).toFixed(2);

                }, 0.0)
              }

            </td>
          </tr>
          <tr class="status">
            <td height="30" colspan="3"></td>
          </tr>
        </tfoot>
      </table>
    `;  
  }


  // recebendo a listaTransacoes
  update(model) {

    // adicionado o template no html
    this._elemento.innerHTML = this._template(model);
    
    // formata total
    let $ = document.querySelector.bind(document);
    $('.extrato-total').textContent = 'R$' + $('.extrato-total').textContent;


    // mostra sinal da transacao
    var compra = document.querySelectorAll('.compra');
    var venda = document.querySelectorAll('.venda');

    compra.forEach((item) => item.textContent = '-');
    venda.forEach((item) => item.textContent = '+');


    // mostra status
    if($('.extrato-total').textContent.indexOf('-') > 0){
      $('.status td').textContent = '[ PREJUÍZO ]';
      $('.status td').classList.add('extrato-prejuizo');
    }
    else{
      $('.status td').textContent = '[ LUCRO ]';
      $('.status td').classList.add('extrato-lucro');
    }
  }
}






