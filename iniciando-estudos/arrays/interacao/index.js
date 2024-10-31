//interação entre arrays

//Callback (funções que enviamos como argumento)
//callback é chamado para cada elementodo array
//espera que receba como parametro o elemento principal, o indice e o array completo

let names = [
    "João",
    "Ana",
    "Paulo",
    "Maryane",
    "Lucas",
];

//forEach - percorre o array e executa a função callback para cada elemento
names.forEach((name, index)=>{
    console.log(`
        Nome: ${name} 
        Índice: ${index}   
    `);
});

//map - retorna um novo array sem alterar o array original
//ex - deixar os nomes em maiúsculo
let namesUpperCase = names.map((upper)=>{
    let upperCase = upper.toUpperCase();
    return upperCase;
});

console.log(`
    Array original - ${names}
    Array em maiúsculo - ${namesUpperCase}
`);

//filter - filtra os elementos da array. Espera um valor booleano como retorno para saber se o elemento passou no filtro
let whithSevenChars = names.filter((char)=>{
    return char.length >= 7; //retorna o elemento que tenha 7 caracteres ou mais,se não, é false
});
console.log(whithSevenChars);

//find - encontra o primeiro elemento que satisfaça a condição - retorna o elemento em si e não em uma array
let whith7Chars = names.find((char)=>{
    return char.length >= 7; //retorna o elemento que tenha 7 caracteres ou mais,se não, é false
});
console.log(whith7Chars);