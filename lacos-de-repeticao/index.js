//while - enquanto

// let i = 0;

// while(i <= 10){ //enquanto i for menor ou igual a 10
//     console.log(i);
//     i++; //icremento - seria a mesma coisa de escrever i = i + 1.Adiciona 1 ao valor da var
// }

// for - para. Mesmo esquema do while mas é uma forma mais prática

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// forEach() - interagir com arrays ou objetos

let names = [
    'Alexandre',
    'Claudio',
    'Victor',
    'Debora'
];

names.forEach((name,index)=>{ //nome da array. parâmetros criados da função anônima
    console.log(name,index);//seu index e o seuvalor
})