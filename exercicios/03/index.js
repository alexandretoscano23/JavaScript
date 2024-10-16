// Calculadora dinânica

//Temos que ter - um número inicial; um sinal (tipo de operação); um número final

let firstNumber = prompt('Informe o primeiro número:');
let sign = prompt('Informe o sinal da operação:');
while(sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/'){
    alert('Operação inválida1')
    sign = prompt('Informe o sinal da operação:');
} 
let finalNumber = prompt('Informe o segundo número:');

//pegar uma string e converter para número com função. Se não fizer, o + vai acabar concatenando por entender que os valores são strings

firstNumber = parseInt(firstNumber); // converte para número
finalNumber = parseInt(finalNumber);

let result = 0; //o resultado se inicia com 0

if(sign === '+' ){
   result = firstNumber + finalNumber;
}else if(sign === '-'){
    result = firstNumber - finalNumber;
}else if(sign === '*'){
    result = firstNumber * finalNumber;
}else if(sign === '/'){
    result = firstNumber / finalNumber;
}

alert(result);
