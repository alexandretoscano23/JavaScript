//pedir o nome da nave
let nameNav = prompt('Qual o nome da nave?');

//velocidade começa com 0
let velocity = 0;

//função que armazena as opço~es que o usuário escolhe no menu
let chosenOption 

//verificar se a opção é diferente de 1, 2, 3, 4
function showMenu(){
    let option; //começa com o valor undefined,que é diferente de todos os números. Se o usuário digitar um valor diferente dos números selecionados, o loop vai rodar novamente
    while(option != '1' && option != '2' && option != '3' && option != '4'){
        option = prompt(`
            O que deseja fazer?

            1 - Acelerar a nave em 5km/s
            2 - Desacelerar a nave em 5km/s
            3 - Imprimir dados de bordo
            4 - Sair do programa
        `)
    }
    return option; //retornar o valor que o usuário escolheu
}
//função para acelerar
function speedUp(velocity){
    let newVelocity = velocity + 5;
    return newVelocity;
}

//função para desacelerar
function slowDown(velocity){
    let newVelocity = velocity - 5;
    if(newVelocity < 0){ //se a velocidade for menor que 0, ela vai receber 0
        newVelocity = 0;
    }
    return newVelocity;
}

//função dados de bordo
function printBoardData(nameNav, velocity){
    alert(`
        Nome da nave: ${nameNav}
        Velocidade: ${velocity} km/s
    `);
}

//loop que vai rodar a opção escolhida
while(chosenOption != '4'){
    chosenOption = showMenu();
    switch(chosenOption){
        case '1':
            velocity = speedUp(velocity);
            break;
        case '2':
            velocity = slowDown(velocity);
            break;
        case '3':
            printBoardData(nameNav, velocity);
            break;
        default:
            alert('Encerrando programa de bordo');
            
    }
}