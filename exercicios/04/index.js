//pedir o nome do piloto
let pilotName = prompt('Qual o seu nome?');

//velocidade inicial
let velocity = 0;

//guiar a velocidade da nave

let newVelocity = prompt('A que velocidade você gostraia de acelerar?');

let confirmVelocity = confirm("Está acelerando para" + ' ' + newVelocity + "km/s"); //confirm retornao valor do prompt

//se apertar em ok no prompt, a velocidade será alterada
if(confirmVelocity){
    velocity = newVelocity;
}

//verificar a velocidade da nave
if(velocity <= 0){
    alert('A nave está parada. Parta e aumentea velocidade');
}else if(velocity < 40){
    alert('Você está devagar. Aumente a velocidade');
} else if(velocity >= 40 && velocity < 80){
    alert('Uma boa velocidade. mantenha assim');
}else if(velocity >= 80 && velocity < 100){
    alert('Velocidade alta. Diminua');
} else if(velocity >= 100){
    alert('Velocidade perigoda. Diminua agora');
}

alert(`
    Piloto: ${pilotName},
    Velocidade: ${velocity} km/s.
`);