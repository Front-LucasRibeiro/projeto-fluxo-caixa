// CONTROLLER - Passa os dados da model para a view atraves de um metodo, ou 
// os dados dados da view para o model

class TransacaoController {

  constructor(){
    
    // criando alias para querySelector e mantendo a associacao do querySelector ao document
    let $ = document.querySelector.bind(document);

    this._tipoTransacao = $('#tipoTransacao');
    this._nomeTransacao = $('#nomeTransacao');
    this._valorTransacao = $('#valorTransacao');

    // objeto lista de negociacoes
    this._listaTransacoes = new ListaTransacoes();
    // objeto view extrato, inserindo template na area de extratos
    this._transacoesView = new TransacoesView($('#transacoesView'));

    // atualizando a view sempre que for adicionando uma transacao e recebendo a lista de transacoes
    this._transacoesView.update(this._listaTransacoes);
  }

  adiciona(event) {
    event.preventDefault();

    // Criando objeto transacao, passando dados para o model
    let transacao = new Transacao(

      this._tipoTransacao.value,
      this._nomeTransacao.value,
      this._valorTransacao.value
    );

    // adicionando objeto transacao dentro do objeto ListaTransacoes
    // metodo acessador do objeto ListaTransacoes
    this._listaTransacoes.adiciona(transacao);
    this._transacoesView.update(this._listaTransacoes);
    this._limpaFormulario();
    // this.salvarDados();
  }

  // salvarDados(){
  //   console.log(this._listaTransacoes.transacoes);
  //   const BANCO_ARQUIVO = 'dados/bancoArquivo.js';
  // }

  

  _limpaFormulario() {
    document.forms["formTransacoes"].reset();
    this._nomeTransacao.focus();
  }
}

      

  
  
 // module.exports = TransacaoController;