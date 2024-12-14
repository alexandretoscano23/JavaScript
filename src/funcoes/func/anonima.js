//função anônima
const soma = function (x, y){
    return x + y;
}

//3 parâmetros. Se o terceiro parâmetro não for passado, a função soma será chamada
const imprimirResultado = function (a, b, operacao = soma ){
    console.log(operacao(a, b));
}

imprimirResultado(3, 4); //como o terceiro parâmetro não foi chamddo, irá retornar a função soma,executado a + b
imprimirResultado(4,4, function(x, y){
    return x - y;
})

//em obj
const pessoa = {
    falar:function (){
        console.log('Olá'); 
    }
}