function moeda(i) {
  var v = i.value.replace(/\D/g,'');
  v = (v/100).toFixed(2) + '';
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
  i.value = v;
}

var inputValor = document.querySelector('.dinheiro');


inputValor.addEventListener('keyup', function(){
  moeda(this);
});















// $('.extrato-total').mask('#.##0.00', {reverse: true});