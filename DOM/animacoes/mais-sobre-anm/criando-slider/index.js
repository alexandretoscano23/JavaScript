let lastIndex = 0; //armazena o índice da última imagem exibida, começa sempre no 0

//pegar todas as imagens

let images = document.querySelectorAll('.container img');

images.forEach((img,index)=>{
   document.querySelectorAll('.bullet-single')[index].addEventListener('click', ()=>{

    let lastImage = document.querySelectorAll('.container img')[lastIndex]; //pegar a última imagem exibida

    let actualImage = document.querySelectorAll('.container img')[index]; //pegar o index da imagem clicada

    document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet');

    document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet');

    lastImage.style.opacity = 0;
    actualImage.style.opacity = 1;

    lastIndex = index;
    
   });//add
});