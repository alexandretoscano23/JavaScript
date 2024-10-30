//Condições - Servem para verificar se uma expressão é verdadeira ou falsa

name = 'Alexandre';

if(name === 'Alexandre'){ //se o nome for Alexandre
    console.log('Olá Alexandre'); //mostra esta mensagem
} else if(name === 'Thiago'){ // se o nome for Thiago
    console.log('Olá Thiago'); //mostra esta mensagem
} else { //se não for nenhum dos dois
    console.log('Olá ?'); //mostra esta mensagem
}

//Comparando números

// >= - maior ou igual, <= - menor ou igual, > - maior, < - menor, === - igual, !== - diferente

let number = 100;

if(number > 20){
    console.log('O número é maior a 20');
} else if(number < 20){
    console.log('O número é menor que 20');
} else if(number === 20){
    console.log('O número é igual a 20');
} else {
    console.log('dado inválido');
}

//!== - diferente

let name2 = 'Astoufo';

if(name2 !== 'Astoufo'){
    console.log('Dado não esperado');
}else if(name2 === 'Astoufo'){
    console.log('Olá!')
} 

//Mais de uma verificação no if

// && - "e" - todas as condições precisam ser verdadeiras
// || - "ou" - apenas uma precisa ser vrdadeira

if (number === 100 && name2 === 'Astoufo'){ //se o número for 100 e o nome for Astoufo
    console.log('bem-vindo, Astoufo');
} else{
    console.log('dados inválidos');
}

if (number === 100 || name2 === 'Cleber'){ //se o número for 100 ou o nome for Cleber
    console.log(true);
} else{
    console.log(false);
}

//Switch
let velocity = 80;

switch(velocity){
    case 100: //caso for
        console.log('Velocidade de 100km/h');
        break; //pare a execução
    case 160:
        console.log('Velocidade de 160km/h');
        break;
    default: //caso não seja nenhum dos casos
        console.log('Velocidade indefinida');
}