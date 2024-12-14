//Funções importantes
const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); //Retorna as chaves do objeto
console.log(Object.values(pessoa)); //Retorna os valores do objeto

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true, //Define se o atributo será listado
  writable: false, //Define se o atributo pode ser modificado
  value: "01/01/2019",
});

pessoa.dataNascimento = "01/01/2017"; //Não será alterado
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//animal
const animal = {
  tipo: "cachorro",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(animal));
console.log(Object.values(animal));

Object.defineProperty(animal, "cor", {
  enumerable: true,
  writable: false,
  value: "preto",
});

console.log(animal);

//Object.assign
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); //Concatena os objetos
console.log(dest);

//cores
const corPrincipal = { cor1: "Amarelo" };
const corSecundaria = { cor2: "Azul" };
const corTerciaria = { cor3: "Vermelho" };
const cores = Object.assign(corPrincipal, corSecundaria, corTerciaria);
console.log(corPrincipal);
