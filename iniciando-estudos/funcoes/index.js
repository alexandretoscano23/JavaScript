//Função 
 
function nameFunction(){ //sempre tem que ter um callback da função (um nome)
    console.log('callback'); // vai ser executado quando a função for chamada
}

nameFunction(); //chamando a função

// Parâmetros

function nameFunction2(name,age){
    console.log(`O nome passado é : ${name}. A idade é : ${age}`);
}

nameFunction2('Gabriel', 20); //chama a função e dar o valor aos parâmetros
nameFunction2('João', 30);

// Para retornar um valor

function returnName(callback){
    if(callback === 1){
        return 'Alexandre'; //retorna o valor adicionado
    } else{
        return 'Outro nome';
    }
    
}

let name = returnName(1); //chama a função e passa o valor do callback

console.log(name);

// Chamando por meio de variáveis

let func = function(){
    window.alert('Olá Mundo!');
}

func();



