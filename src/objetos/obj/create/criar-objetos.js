//formas de criar objetos

//forma literal
const objLiteral = {};

//Object
console.log(typeof Object, typeof new Object());
const objObject = new Object();
console.log(objObject);

//Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome; //disponivel para ser acessado fora da função
  this.getPrecoDesconto = () => {
    //não é possivel acessar fora da função
    return preco * (1 - desc);
  };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log(p1.getPrecoDesconto().toFixed(2), p2.getPrecoDesconto().toFixed(2));

//Função Factory - função que retorna um objeto
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      //calcular o salário baseado nas faltas
      return (salarioBase / 30) * (30 - faltas); //salario base dividido por 30 dias do mês, multiplicado pela quantidade de dias trabalhados
    },
  };
}

const f1 = criarFuncionario("João", 7980, 4);
const f2 = criarFuncionario("Maria", 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

//Object.create
const createObj = Object.create(null);
createObj.nome = "Aldair";
console.log(createObj);

//Uma função famosa que retorna Objeto
const fromJson = JSON.parse('{"string": "Era uma string e virei objeto"}');
console.log(fromJson.string);

//produtos com desconto
//função factory - retorna um objeto
function produtos(nome, preco, desconto) {
  return {
    nome,
    preco,
    desconto,
    getDesconto() {
      return preco - preco * desconto;
    },
  };
}

const nike = produtos("nikeshoes", 200, 0.15);
console.log(nike.getDesconto());

const adidas = produtos("Camisa Adidas", 100, 0.1);
console.log(adidas.getDesconto());

const luiV = produtos("Bolsa Lui V", 150, 0.1);
console.log(luiV.getDesconto().toFixed());

//Itens para setup em desconto
function setup(name, price, discount) {
  return {
    name,
    price,
    discount,
    getDiscaunt() {
      return price - price * discount;
    },
  };
}

const mousePad = setup("Mouse Pad", 100, 0.1);
console.log(mousePad.getDiscaunt());
