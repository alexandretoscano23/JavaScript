//previnir que o objeto seja extendido - não consegue adicionar, mas consegue modificar e excluir
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});

console.log("Extensível:", Object.isExtensible(produto)); //se é extensível

produto.nome = "Borracha";
produto.preco = 2.5;
delete produto.tag;

console.log(produto);

//selar os objetos - não consegue adicionar ou excluir, mas consegue modificar
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa)); //se está selado

pessoa.nome = "Juliana Silva";
delete pessoa.idade; //não pode deletar
console.log(pessoa);

//congelar os objetos - não consegue adicionar, excluir ou modificar
const animal = { nome: "Rex", raca: "Pitbull" };
Object.freeze(animal);
console.log("Congelado:", Object.isFrozen(animal)); //se está congelado
