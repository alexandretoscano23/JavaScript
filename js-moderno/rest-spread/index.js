//spread

let names = [
{
    name: 'Alexandre'
},

{
    name: 'ana'
}

];

const objects = [...names, //pegar todos os nomes da array names e adicionar na array objects
{
    name:'Alexandre'
}
];

console.log(objects);

//rest - é o mesmo princípio só que com parâmetros de funções

function tests(...rest){
    console.log(rest);
}

tests(1,2,3,4,5,6,'alexandre',{name:'Paula'}); //pega todos os parâmetros,de qualquer tipo, e coloca em um array