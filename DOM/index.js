//pegar todos os parágrafos do site e selecionar o primeiro

let getParagraphs = document.getElementsByTagName('p'); //pegar todos os elementos p.
console.log(
    getParagraphs[0], //pegar o primeiro p
    getParagraphs[1].innerHTML, //segundo p e seu conteúdo interno

); 

//manipulando a tag p com innerHTML

let manipulation = getParagraphs[2].innerHTML = 'Parágrafo Manipulado com JS!';

//repetição para manipular todos os parágrafos

for(i=0; i < getParagraphs.length; i++){ //enquanto i for menor que o tamanho do número de tags p, incrementar o texto manipulado
    getParagraphs[i].innerHTML = 'Parágrafo Manipulado com JS' + ' - ' + i;
}