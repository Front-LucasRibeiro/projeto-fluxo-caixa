//MODEL - Abstração de algo do mundo real, o que cada objeto deve fazer 
//Regras e negócio - instancia de dados e comportamento, métodos

class Transacao{
  // criacao de objeto
  constructor(tipo, nome, valor){
    this._tipo = tipo;
    this._nome = nome;
    this._valor = valor;

    // Encapsulamento raso,não congela as propriedades de um objeto
    Object.freeze(this);  //Transação, instancia
  }

  // métodos acessadores podendo sem chamados em forma de propriedade
  get tipo() {

    if(this._tipo == '+'){
      
      return 'venda';
    }
    return 'compra';
  }

  get nome() {
    return this._nome;
  }

  get valor() {
    return this._valor;
  }
}


