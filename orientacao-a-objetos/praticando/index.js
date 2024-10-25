//selecionando o span - samoieda
let spanSamoieda = document.querySelector('.ver-mais-samoieda');
//adicionando o evento de click
spanSamoieda.addEventListener('click',()=>{
    //selecionando o parágrafo
    let p = document.querySelector('.texto');
    let anim = p.classList.toggle('click'); //adicionar a classe click

    if(anim){
        spanSamoieda.innerHTML = 'Ver Menos';
    } else{
        spanSamoieda.innerHTML = 'Ver Mais';
    }
});//add span

//selecionando o span - samoieda
let spanHusky = document.querySelector('.ver-mais-husky');
//adicionando o evento de click
spanHusky.addEventListener('click',()=>{
    //selecionando o parágrafo
    let p = document.querySelector('.texto-husky');
    let anim = p.classList.toggle('click'); //adicionar a classe click

    if(anim){
        spanHusky.innerHTML = 'Ver Menos';
    } else{
        spanHusky.innerHTML = 'Ver Mais';
    }
});//add span

//selecionando a div clique-aqui
let div = document.querySelector('.clique-aqui');
div.addEventListener('click',()=>{
    let anim = div.classList.toggle('clicou');

    if(anim){
        div.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB">';
    } else{
        div.innerHTML = '<img src="https://media.istockphoto.com/id/1005374612/pt/vetorial/dog-paw-icon-logo.jpg?s=612x612&w=0&k=20&c=JN4ymWd65fXD1kb2UNRygKYTPbSfvm90ydntKe0wTEU=">';
    }

})

//carrossel
let lastIndex = 0; //índice da última imagem visível
//selecionar todas as imagens 
let images = document.querySelectorAll('.images img');
let bullets = document.querySelectorAll('.bullet-single') 
images.forEach((image,index)=>{
    document.querySelectorAll('.bullet-single')[index].addEventListener('click',()=>{
        let lastImage = document.querySelectorAll('.images img')[lastIndex];
        let actualImage = document.querySelectorAll('.images img')[index];

        document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet');
        document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet');

        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;

        lastIndex = index;

    })
});
