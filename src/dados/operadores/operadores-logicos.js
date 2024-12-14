//and -> todas as condições precisam ser verdadeiras
const planejamentoConcluido = true;
const estaSol = true;

const temPicnic = planejamentoConcluido && estaSol;
console.log("Vamos fazer um picnic?", temPicnic);

//or -> pelo menos uma condição precisa ser verdadeira
const estudei = false;
const liUmLivro = true;

const diaProdutivo = estudei || liUmLivro;
console.log("Foi um dia produtivo?", diaProdutivo);

//not -> inverte o valor da condição
const estouCansado = true;
console.log("Vou dormir?", !estouCansado);
