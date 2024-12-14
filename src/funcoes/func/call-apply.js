//produto
function getPreco(imposto = 0, moeda = "R$") {
  const calc = this.preco * (1 - this.desc) * (1 + imposto); //1 - desconto serve para calcular a porcentagem original que o cliente vai pagar. ex - 15% de desconto, o cliente paga 85% do valor original (1 - 0.15 = 0.85). 1 + imposto serve para calcular o valor do imposto. ex - 17% de imposto, o cliente paga 117% do valor original (1 + 0.17 = 1.17)
  return `${moeda} ${calc.toFixed(2)}`; //toFixed(2) serve para ter 2 casas decimais
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco, //atribuir a função ao objeto
};

console.log(getPreco.call(produto, 0.17, "$")); //chama diretamente os parametros

//produto 2
function getPreco2(imposto = 0, moeda = "R$") {
  const calc = this.preco * (1 - this.desc) * (1 + imposto);
  return `${moeda} ${calc.toFixed(2)}`; //calculo para ter 2 casas decimais
}

const product = {
  nome: "Livro",
  preco: 1200,
  desc: 0.1, //desconto de 10%
  getPreco2,
};

console.log(getPreco2.call(product, 0.17, "$")); //chama diretamente os parametros

//produto 3
function getPreco3(imposto = 0, moeda = "R$") {
  const calc = this.preco * (1 - this.desc) * (1 + imposto);
  return `${moeda} ${calc.toFixed(2)}`;
}

const produto2 = {
  nome: "Caneta",
  preco: 7.99,
  desc: 0.1,
  getPreco3,
};

console.log(getPreco3.apply(produto2, [0.2, "$"])); //passa os parametros em uma array

//produto 4
function getPreco4(imposto = 0, moeda = "R$") {
  const calc = this.preco * (1 - this.desc) * (1 + imposto);
  return `${moeda} ${calc.toFixed(2)}`;
}

const product4 = {
  nome: "Celular",
  preco: 1200,
  desc: 0.1,
  getPreco4,
};

console.log(getPreco4.apply(product4, [0.12, "R$"]));
