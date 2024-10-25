//pegar a box

let box = document.querySelectorAll('.box')[0]; //pegar o primeiro elemento que tem a classe box


// setTimeout(()=>{ //função para executar algo depois de um determinado tempo ela é executada
//     box.classList.add('animEsquerda');
    
// }); //tempo em milisegundos (1s)

box.addEventListener('click', ()=>{ //adiciona um evento que,ao clicar, executa
    box.classList.add('animEsquerda');
  
    
});
