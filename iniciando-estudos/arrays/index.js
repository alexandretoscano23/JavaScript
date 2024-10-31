//variável que armazena vários dados
let names = [
    'Jõao',
    'Ana',
    'Alexandre',
    'Maria'
];

// console.log(names[0]); //acessar o elemento da array pela posição.

names.push('Cleiton'); //adiciona um novo elemento na array

names.pop(); //remove o último elemento da array

names.shift(); //remove o primeiro elemento da array

names.unshift('pelé'); //adiciona um elemento no início da array

console.log(names);

console.log(names.length); //retornao tamanho dessa array

let index = names.indexOf('Alexandre'); //retorna a posição de um determinado elemento na array
console.log(index);

