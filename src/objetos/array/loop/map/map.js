//array de números
const numbers = [1, 2, 3, 4, 5];
//array do dobro dos números originais
let results = numbers.map(function(e){
    return e * 2;
})

//console.log(`Array original : ${numbers}. O dobro desses números : ${results}`); //returna outra array com os dados modificados

//map com map
const sum10 = e => e + 10; //função que recebe "e" e retorna "e" + 10
const triple = e => e * 3; //função que recebe "e" e retorna "e" * 3
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` //replace - troca o ponto por vírgula
results = numbers.map(sum10).map(triple).map(toMoney); //chama as funções em sequência

// -> soma 10 -> multiplica por 3 -> transforma em Real (R$)
console.log(results);