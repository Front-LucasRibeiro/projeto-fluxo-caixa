var express = require('express');
var router = express.Router();

// chamando conexao
var MongoClient = require('mongodb').MongoClient;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistema Fluxo de Caixa' });
});

module.exports = router;
module.exports = MongoClient;
