function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11);
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou, parabens";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Você errou, tente novamente";
  }
}