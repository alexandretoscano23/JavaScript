const div = document.querySelector('.gatos'); //selecionar a div
const url = 'https://api.thecatapi.com/v1/images/search'; //selecionar a url

async function animais(){ //função assync
    const response = await fetch(url); //esperar a resposta da url
    const data = await response.json(); //esperar a resposta em json
    return data[0].url; //retornar a url da imagem
}
Promise.all([animais()]).then((results) => { //pegar o resultado da promise
    results.forEach((result) => { //loop por cada resultado
        //criar um elemento img
        const createImg = document.createElement('img');
        //adicionar um src a img - resultado da promise
        createImg.src = result;
        //a div vai receber a imagem
        div.appendChild(createImg);
        //estilizar a div e a img
        div.style.height = '350px';
        div.style.width = '380px';
        createImg.style.width = '100%';
        createImg.style.height = '100%';
        createImg.style.objectFit = 'cover';
        createImg.style.borderRadius = '20%';
        createImg.style.backgroundRepeat = 'no-repeat';
        createImg.style.boxShadow = '12px 12px 25px 0 black';
    });
});
