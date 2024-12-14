function gerarNumeroAleatorio(min, max) {
  //se der 0 ele vai ser o minimo e se der 1 vai ser o maximo
  const valor = Math.random() * (max - min) + min;
  //arredondar o valor para o num mais próximo
  return Math.round(valor);
}

let opcao = 0;

//se for diferente de -1
while (opcao != -1) {
  //gerar um numero aleatorio entre -1 e 10
  opcao = gerarNumeroAleatorio(-1, 10);
  console.log(`Opção escolhida foi ${opcao}`);
}

console.log("fim!");
