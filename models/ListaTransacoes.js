class ListaTransacoes{

  constructor() {
    // lista default
    this._transacoes = []
  }
  
  adiciona(transacao) {
    this._transacoes.unshift(transacao);

    // chamando conexao
    var MongoClient = require('./../mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myobj = this._transacoes;
      dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
  }

  get transacoes(){

    return this._transacoes;
  }
}
