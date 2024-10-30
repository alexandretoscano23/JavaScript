//&& - e / retorna false se alguma parte da expressão possuir algo falso

let number = 30;
let number2 = 20;
let number3 = 25;
console.log(number > number2 && number2 > number3); //false

// || - ou retorna true se alguma exressão for verdadeira,mesmo a outra sendo falsa

console.log(number < number2 || number3 > number2); //true

// ! - se algo for falso retornaverdadeiro e se algo form verdadeiro retorna false
console.log(!(number < number2)); //retorna true

