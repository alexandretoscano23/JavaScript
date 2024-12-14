//função construtora
function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até breve", 456);
console.log(aula1, aula2);

//simulando o new - receber uma função construtora e um conjunto de parâmetros
function novo(funConst, ...params) {
  const obj = {}; //cria um objeto
  obj.__proto__ = funConst.prototype; //associa o protótipo do objeto ao prototype da função construtora
  funConst.apply(obj, params); //esecuta a função passando como contexto(this) o objeto criado e os parâmetros recebidos no método "novo"
  return obj; //retorna o objeto criado
}

const aula3 = novo(Aula, "Bem Vindo", 123);
const aula4 = novo(Aula, "Até breve", 456);
console.log(aula3, aula4);
