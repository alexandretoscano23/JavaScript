//compor várias funções paa executar um determinado processamento
function composition(...funcoes){ //passar quantas funções quiser
    return function(value){
        return funcoes.reduce((acc, fn)=>{ //reduce - reduz uma array em um único valor
            return fn(acc); //função recebe o valor acumulado como parâmetro
        } , (value));
    }
    
};

function scream(text){
    return text.toUpperCase();
}

function emphasize(text){
    return `${text}!!!!!`
}

function slow(text){
    return text.split('').join(' '); //separar todas as letras com um espaço
}

const result = composition(scream, emphasize, slow)( 'para'); //consegue pegar todo um fluxo de processamento e chamar tudo de uma vez

console.log(result);

const scr = composition(scream)('ai');
console.log(scr);