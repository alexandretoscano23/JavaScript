//function 
function sayHello(){
    console.log('Hello');
}
sayHello(); //declarar a função

//parâmetros
    function speedUp(velocity, aceleration){
        let newVeloity = velocity + aceleration;
        console.log(newVeloity);
    }
speedUp(60, 10); //enviar os valores dos parâmetros em ordem

//parâmetros com valores padrão - caso não seja passado o valor do parâmetro, ele assume o valor padrão
function nameMessage(name, message = 'Hello'){
    console.log(message + ' ' + name);
}
nameMessage('Alexandre');

//retornar um valor
function message(name, message = 'Hello'){
    return  message + ' ' + name;
}
message('Alexandre');

//hight order function - recebem e retornam outras funções
function doubleVelocity(velocity, printer){
    console.log(doubleVelocity);
    let newVelocity = velocity * 2; //dobrou a velocidade em uma variável interna
    printer(newVeloity); //função que deve receber o valor. Recebe a função de printVelocity abaixo
    return newVelocity;
}

//função para imprimir a velocidade
let printVelocity = velocity =>{ 
    console.log(`
        Nova Velocidade: ${velocity} km/s
    `);
}

let newVeloity= doubleVelocity(60, printVelocity);
console.log(newVeloity);