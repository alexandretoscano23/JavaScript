//se tiver entre 1 - 12 anos - criança. 13 - 18 anos - adolescente. 19 - 60 anos - adulto. 70 - 100 anos - idoso. Se não for nenhum desses valores, retornar "idade não identificada".
let age = 2;

if(age >= 1 && age <=12){
    console.log('Criança');
} else if(age >= 13 && age <= 18){
    console.log('Adolescente');
} else if(age >= 19 && age <= 69){
    console.log('Adulto');
} else if(age >= 70 && age <= 100){
    console.log('Idoso');
} else{
    console.log('Insira uma idade válida');
}

console.log(age);

//caso uma tecla for digitado o boneco executa uma ação

let action = "r";

switch(action){
    case "w":
        console.log('Walking');
        break;
    case "d":
        console.log('walkink to left');
        break;
    case "a":
        console.log('walkink to right');
        break;
    case "r":
        console.log('Jumping');
        break;     
    default:
        console.log('error')
        break;
}

console.log(action);