//alterando as imagens

let lastIndex = 0; //qual o index da última imagem que está aparecendo

//pegar todas as imagens que existem

let images = document.querySelectorAll('.container img');

//percorrer todas as imagens
images.forEach((item,index)=>{ //recuperar o index
   //evento a cada bullet
   document.querySelectorAll('.bullet-single')[index].addEventListener('click',()=>{
      let lastImage = document.querySelectorAll('.container img')[lastIndex];//imagem que vai sumir
      let actualImage = document.querySelectorAll('.container img')[index];//imagem que vai aparecer

     //bullets
     document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet');//remover a classe do anterior
     document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet');//adicionar a classe ao atual(clicado)


      lastImage.style.opacity = 0;//imagem anterior vai sumir
      actualImage.style.opacity = 1; //imagem atual vai aparecer

      lastIndex = index; //receber o valor do index clicado
   })
});