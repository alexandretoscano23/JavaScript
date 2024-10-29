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

// let names = [
//     'Alexandre',
//     'Claudio',
//     'Victor',
//     'Debora'
// ];

// names.forEach((name,index)=>{ //nome da array. parâmetros criados da função anônima
//     console.log(name,index);//seu index e o seuvalor
// })

//fazer a revisão dp carro aos 20km

let km;
let revision = 20;

for(km = 0; km < 20; km++ ){
    console.log('Pode rodar');
}

//calcular a média de vários alunos
//array dentro de array.
//O [] é a o array principal que agrupa todos os alunos e os de dentro são os alunos,cada um contendo seus determinados valores

let students = [
    [6, 7, 8, 6], //aluno 1 e as as notas de cada bimestre
    [8, 5, 6, 8], //aluno 2 e as as notas de cada bimestre
    [10, 6, 8, 9] //aluno 3 e as as notas de cada bimestre
];


for(let i = 0; i < students.length; i++){//enquanto o i for menor que o número de alunos dentro da array,vai executar o código
    
    let grade = 0; //a nota começa com 0

    let student = students[i]; //student recebe a array,notas do aluno
    console.log("Aluno:", student);

    for(let g = 0; g < student.length; g++){ //enquanto o g for menor que o número de notas do aluno, vai executar o código
        grade += student[g]; //a var nota recebe a soma das notas do aluno
    }

    let average = grade / 4;  //a média é a nota dividido por 4

    if(average >= 7){ //se a média for menor que 7
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }

    console.log("Média:" + " " + average);
}