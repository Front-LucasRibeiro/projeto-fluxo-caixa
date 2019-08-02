class ListaTransacoes{

  constructor() {
    // lista default
    this._transacoes = []
  }
  
  adiciona(transacao) {
    this._transacoes.unshift(transacao);

    console.log(this._transacoes);

    // chamando conexao
    // const mongoose = require('./../node_modules/mongodb');

    // mongoose.connect('mongodb://localhost:27017/transacoesBD', {useNewUrlParser: true}, (err) => {
    //   if (!err) { console.log('MongoDB Connection Succeded.')}
    // });

    // var db = mongoose.connection;

    // db.on('error', console.error.bind(console, 'connection error:'));

    // db.once('open', function() {

    //   // define Schema
    //   var TransacaoSchema = mongoose.Schema({
    //     tipo: String,
    //     nome: String,
    //     valor: String
    //   });

    //   // compile schema to model
    //   var transacoes = mongoose.model('Transacao', TransacaoSchema, 'listaTransacoes');

    //   // a document instance
    //   var transacao = new transacoes({ tipo: '-', nome: 'PC', valor: '15000' });

    //   // save model to database
    //   transacao.save(function (err, transacao) {
    //     if (err) return console.error(err);
    //     console.log(transacao.nome + " saved");
    //   });

    // });
  }

  get transacoes(){

    return this._transacoes;
  }
}
