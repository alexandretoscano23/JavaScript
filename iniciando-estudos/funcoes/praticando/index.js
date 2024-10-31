//retornar uma mensagem
function message(){
    return 'Bem-Vindo ao meu meio de estudos!';
}

console.log(message());

//função que vai ter seu parâmetro também como uma função para receber um determinado valor

function calc(num, printer){
    let calc = num * 2 / 3 + (4 - 1);
    printer(calc);
    return calc.toFixed(2);
}

let result = (calc) =>{
    console.log(`
        O resultado é igual a : ${calc.toFixed(2)}
    `);
}

console.log(calc(10, result));

let anotherCalc = calc(20, (calc2)=>{
    let calc = calc2.toFixed(2)
    console.log(`
        Conta com outro número informado : ${calc}
    `);
})
