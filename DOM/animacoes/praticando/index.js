//ver mais

let span = document.querySelector('span'); //selecionando o span
span.addEventListener('click',()=>{
    let animation = document.querySelector('.container p').classList.toggle('animation'); //adicionando a tag animation no p

    if(animation){
        span.innerHTML = 'Ver Menos:';
    }else{
        span.innerHTML = 'Ver Mais:';
    }

});//add


//animação - círculo

let divCircle = document.querySelector('.circle');
let divP = document.querySelector('.circle p');

divCircle.addEventListener('click', ()=>{
   let animationCircle = divCircle.classList.toggle('animation-circle');
    
    if(animationCircle){
        divP.innerHTML = 'Voltar';
    }else{
        divP.innerHTML = 'Ir';
    }
});//add

//buttons

//indice da última imagem visível (sempre começa com 0)

lastIndex = 0;

//selecionar todas as imagens e botões

let images = document.querySelectorAll('.images img');
let buttons = document.querySelectorAll('.button-single');

//looping por todos os botões
buttons.forEach((button,index)=>{
    //adicionando evento de click ao buttun
    document.querySelectorAll('.button-single')[index].addEventListener('click', ()=>{
        //tornando a útima imagem invisível
        let lastImage = document.querySelectorAll('.images img')[lastIndex];
        //tornando a imagem atual visível
        let actualImage = document.querySelectorAll('.images img')[index];
        
        //button
        //tornando o botão anterior sem a classe 
        document.querySelectorAll('.button-single')[lastIndex].classList.remove('active-button');
        //button atual com a classe
        document.querySelectorAll('.button-single')[index].classList.add('active-button');

        //imagem atual visível
        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1

        lastIndex = index;
    });
});//foreach




 