function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);
  console.log(valorDolar);

  var valorReal = valorDolar * 5.2;
  console.log(valorReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar é US$: " + valorReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}