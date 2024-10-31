//naves
const spaceShips = [
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false],
];

//naves que tenham mais de 9 tripulantes
let crew9 = spaceShips.filter((ship)=>{
    return ship[1] > 9; //retorna o número de tripulantes
}).map((nameNav)=>{ //retorna apenas o nome da nave
    return nameNav[0];
});

//encontraro número da primeira plataforma que estiver em engate
let plataform = spaceShips.findIndex((ship)=>{ //retorna o índice da primeira array que tiver o valor false
    return ship[2] === false;
});

//lista com onome de cada nave em caixa alta
let upperCase = spaceShips.map((ship)=>{
    return ship[0].toUpperCase();
});

//join - retorna o array e vai juntar entre cada elemento uma string - no caso vai separar todos os elementos com uma vírgula
let message = `
    Naves com mais de 9 tripulantes: ${crew9.join(', ')}
    Plataformas em engate: ${plataform}
    Mensagem: Espaçonaves destacadas: ${upperCase.join(', ')}
`;

alert(message)