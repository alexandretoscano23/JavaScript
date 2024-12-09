//criar de forma literal
function fun1() {}

//armarzenar em uma variavel
const fun2 = function () {};

//armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array[0](2, 3));

//armazenar em um atributo de objeto
const obj = {};
obj.speak = function () {
  return "Olá";
};
console.log(obj.speak());

//passar função como parametro
function execut(fun) {
  fun();
}

execut(function () {
  console.log("Executando...");
});

//uma função pode retornar/conter uma função
function sum(a, b ){
    return function(c){
        console.log( a + b + c);
    };
};

sum(2,3)(4); //primeiro executa a função sum e depois a função c

//recuperar os parâmetros a partir de arguments
//arguments é um array interno de uma função
function secondSum(){
    let sum = 0;
    for(i in arguments){ //todos os índices dos argumentos que foram passados para essa função
        sum += arguments[i];
    }
    return sum;
}

console.log(`A soma deu -> ${secondSum(1,2,4,2,5,1,100,100,100,1.23132333).toFixed(2)}`);

//parâmetros padrão
function deft(a = 0, b = 0){
    return a + b;
}
console.log(deft(2,3));