function MeuObjeto() {}
console.log(MeuObjeto.prototype);

// dois objetos diferentes de uma função construtora apontam para o mesmo protótipo
const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

//console.log(obj1.__proto__ === obj2.__proto__) //aponta para a função.prototype

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
};

obj1.falar();
obj2.nome = "Cleiton";
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "João";
obj3.falar();

const obj4 = {};
obj4.__proto__ = MeuObjeto.prototype;
obj4.nome = "Alexandre Toscano";
obj4.falar();

//cachorros
function Cachorros() {}

const cachorro1 = new Cachorros();
const cachorro2 = new Cachorros();

Cachorros.prototype.nome = "Dalmata";
Cachorros.prototype.origem = function () {
  console.log(
    `Sabia que a raça ${this.nome} tem sua origem na ${this.local}!?`
  );
};

cachorro1.nome = "Samoieda";
cachorro1.local = "Sibéria";
cachorro1.origem();

cachorro2.nome = "Bulldog";
cachorro2.local = "Inglaterra";
cachorro2.origem();

cachorro3 = {};
cachorro3.__proto__ = Cachorros.prototype;
cachorro3.nome = "Pitbull";
cachorro3.local = "Inglaterra";
cachorro3.origem();
