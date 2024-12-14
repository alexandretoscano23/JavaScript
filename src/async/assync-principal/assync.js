//promise  - solicita algo no servidor

//criar uma nova promise
const promessaSimples = new Promise((resolve, reject) =>{
    resolve('Promessa resolvida');
    reject('Promessa rejeitada');
});

//retornar o resultado da promise quando ela for resolvida
promessaSimples.then((result) => console.log(result));

//retornar o erro da promise quando ela for rejeitada
promessaSimples.catch((error) => console.log(error));

//promise com tempo de espera
const promessaComTimeout = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('Promessa resolvida após 3 segundos');
    }, 3000);
});

promessaComTimeout.then((result) => console.log(result));

//verificar uma nota
const verificarNota = (numero) => {
    return new Promise((resolve, reject)=>{
        if(numero >= 0 && numero <= 10){
            resolve('É uma nota válida');
        }else{
            reject('Nota inválida');
        }
    })
};

verificarNota(-1)
.then((result) => console.log(result))
.catch((error)=> console.log(error));

async function fatosCuriosos(){
    return  fetch('https://api.chucknorris.io/jokes/random')
    .then((Response) => Response.json()) //quando chegar a resposta e chama a função json para chamar outra promise 
    .then((data) => data.value); //pegar os datos do json e pegar seu valor
}

const fato = fatosCuriosos();
const fato1 = fatosCuriosos();
const fato2 = fatosCuriosos();

Promise.all([fato, fato1, fato2]).then(console.log);

async function animais(){
    return fetch('https://api.thecatapi.com/v1/images/search')
    .then((Response) => Response.json())
    .then((data) => data[0].url);
}

const gato = animais();
const gato1 = animais();
const gato2 = animais();

Promise.all([gato, gato1, gato2]).then(console.log);