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
function doubleVelocity(velocity,printer){
    let newVelocity = velocity * 2; //newVelocity recebe o valor dobrado da velocity
    printer(newVelocity); //o parâmetro printer vai ser uma função que recebe o valor
    return newVelocity; //retornar o valor dobrado
}

//função que vai imprimir o valor
let printVelocity = (velocity) =>{ //printer recebe o parâmetro velocity
    console.log(`
        Nova velocidade: ${velocity} km/s
    `);
}

let vel = doubleVelocity(60, printVelocity); //variável informa o valor a ser dobrado e a função que vai imprimir o valor
console.log(vel);

//utilizando outra função que recebe os parâmetros mas com valores diferentes
let anotherVelocity = doubleVelocity(50, (vel2)=>{ //função que recebe a função doubleVelocity, passa o valor do primeiro parâmetro e a função printer.que recebe o parâmetro vel2
    console.log(`
        Outra velocidade : ${vel2}    
    `);
});