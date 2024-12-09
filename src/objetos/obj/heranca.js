// const ferrari = {
//     modelo: 'F40',
//     velMax: 324
// }

// const volvo = {
//     modelo: 'V40',
//     velMax: 200
// }

// // __proto__ é o protótipo do objeto
// console.log(ferrari.__proto__ === Object.prototype);
// console.log(volvo.__proto__ === Object.prototype);

//Cadeia de protótipos (prototype chain)
const avo = { atributo1: "A" }; // avo tem como protótipo o Object.prototype
const pai = { __proto__: avo, atributo2: "B" }; // pai tem como protótipo o avo
const filho = { __proto__: pai, atributo3: "C" }; // filho tem como protótipo o pai
console.log(filho.atributo1); // retorna 'a' que é o atributo do avo

//carros
const carro = {
  velAtual: 0,
  velMax: 200,
  acelerar(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  statu() {
    return `${this.velAtual}km de ${this.velMax}km`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, // shadowing - colocar um atributo com o mesmo nome de um atributo do protótipo
};

const volvo = {
  modelo: "V40",
  statu() {
    return `${this.modelo}: ${super.statu()}`; // super referencia o protótipo
  },
};

Object.setPrototypeOf(ferrari, carro); // estabelece a relação de protótipo entre dois objetos
Object.setPrototypeOf(volvo, carro);

volvo.acelerar(100);
console.log(volvo.statu());

ferrari.acelerar(300);
console.log(ferrari.statu());

//computador
const computador = {
  preco: 0,
  desc: 0.1,
  desconto() {
    return this.preco - this.preco * this.desc;
  },
};

const acer = {
  produto: "Acer",
  preco: 1300,
  getDesconto() {
    return `O produto ${this.produto} com seu preço original de R$ ${
      this.preco
    } está em desconto! Passando a ser: R$ ${super.desconto()}`;
  },
};

const del = {
  produto: "Dell",
  preco: 1500,
  getDesconto() {
    return `O produto ${this.produto} com seu preço original de R$ ${
      this.preco
    } está em desconto! Passando a ser: R$ ${super.desconto()}`;
  },
};

Object.setPrototypeOf(acer, computador);
Object.setPrototypeOf(del, computador);

console.log(del);

del.desconto(0.1);
console.log(del.getDesconto());

acer.desconto(0.15);
console.log(acer.getDesconto());

//materiais
const material = {
  produto: "produto",
  preco: 0,
  desc: 0.1,
  desconto() {
    return this.preco - this.preco * this.desc;
  },
};

const mochila = {
  produto: "Mochila",
  preco: 180,
  desc: 0.15,
  desconto() {
    return `O produto ${this.produto},que tem seu preço original de R$ ${
      this.preco
    }, está em promoção! Passando a ser R$ ${super.desconto()}`;
  },
};

Object.setPrototypeOf(mochila, material); // estabelece a relação de protótipo entre dois objetos
console.log(mochila.desconto());
