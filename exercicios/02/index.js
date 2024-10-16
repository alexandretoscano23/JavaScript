//Cálculo de idade 

let birthYear = prompt('Digite o seu ano de nascimento:');

if(birthYear >= 2024 || birthYear < 1930){ //se o usuário escrever um ano maior ou igual a 2024 ou menor que 1930, não executará o cálculo
    alert('Digite um ano válido!');
}else{ //se escrever um ano válido, executará o cálculo
    let currentyear = prompt('Digite o ano atual:');
    let age = currentyear - birthYear;

    window.alert(`Você tem ${age} anos.`);
}




