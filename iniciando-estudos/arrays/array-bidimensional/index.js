//Array que armazena uma outra array
let names = [
    ['Aluno 1', 'Jão'],
    ['Aluno 2', 'Alexandre'],
    ['Aluno 3', 'Ana'],
    ['Aluno 4', 'Pedro'],
    ['Aluno 5', 'Paulo'],
]

names.push(['Aluno 6', 'Maria']); //adiciona uma nova array
console.log(names);

console.log(names[0]);//primeira array

console.log(names[0][1]); //retorna o segundo elemento da primeira array
