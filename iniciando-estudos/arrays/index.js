//Array - conjunto de dados que podem ser acessados por um índice

let names = [
    'Alexandre',
    'Thiago',
    'Maria',
    'João'
];

names[0] = 'Cleiton'; //altera o valor do primeiro elemento da array

names.push('Carla'); // vai "empurrar" o valor para o fina da array. Fazendo parte dela
console.log(names); //mostra a array completa
console.log(names[0]); //mostra o primeiro elemento da array
