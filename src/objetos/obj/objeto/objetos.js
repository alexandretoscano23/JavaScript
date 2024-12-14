//coleção dinâmica de pares chave/valor
const produto = new Object();
produto.name = "Cadeira";
produto["Marca do Produto"] = "Generica";
produto.preco = 220;

delete produto.preco;

console.log(produto);

//mais complexo
const carro = {
  modelo: "a4",
  valor: 89000,
  proprietario: {
    nome: "Alexandre",
    idade: 35,
    endereco: {
      cidade: "João Pessoa",
      rua: "Rua da Paz",
      referencia: "Próximo ao mercado",
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 42,
    },
  ],
  calcularSeguro() {
    //...
  },
};

carro.proprietario.endereco.numero = 1000;
console.log(carro);
