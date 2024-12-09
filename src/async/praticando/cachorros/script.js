//link da api de cachorros
const url = 'https://api.thedogapi.com/v1/images/search';
//selecionar a div
const div = document.querySelector('.cachorros');

//função assíncrona para pegar a imagem
async function fetchDog(){
  const response = await fetch(url);
  const data = await response.json();
  return data[0].url;
}

//pegar o resultado da promise
Promise.all([fetchDog()]).then((results)=>{
    results.forEach((result)=>{
        //criar a img
        const image = document.createElement('img');
        image.src = result;
        //colocar esta imagem dentro da div
        div.appendChild(image);
        div.style.height = '350px';
        div.style.width = '380px';
        image.style.width = '100%';
        image.style.height = '100%';
        image.style.objectFit = 'cover';
        image.style.borderRadius = '20%';
        image.style.backgroundRepeat = 'no-repeat';
        image.style.boxShadow = '12px 12px 25px 0 black';
        
        

    })
})

