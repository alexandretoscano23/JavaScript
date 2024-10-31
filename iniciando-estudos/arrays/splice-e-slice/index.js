//Splice - "emendar". Substitui o array origina. O primeiro parâmetro é o índice do array, segundo é a quantidade de elementos que queremos remover a partir do índice. Os próximoos são os elementos que queremos adicionar no lugar. Apenas o primeiro parâmetro é obrigatório.
let names = [
    'Alexandre',
    'Ana',
    'Cleia',
    'Paulo'
];

//primeiro passo é remover o elemento
let removeName = names.splice(1, 2, 'Pedro', 'Castiel', 'Diogines');//vai para a posição 1(ana) e remove 2 elementos e adicionar 3 novos elementos no lugar

console.log(names);
console.log(removeName);
//* se não colocar os elementosque vão ser ecaixados no lugar, o splice vai simplismente remover os elementos da posição determinada

//Slice - 'Dividir'. Extrai parte do array sem alterar o array original. O primiro parâmetro é o índice inicial, o segundo parâmetro é o índice final. Retorna todos os elementos entre o elemento de índice 'begin' e o anterior do elemento de índice 'end

let lastNames = [
    'Silva',
    'Santos',
    'Oliveira',
    'Costa',
    'Souza'
];

let extractLastName = lastNames.slice(1,3);
console.log(lastNames);
console.log(extractLastName); //vai retornar os índices a partir do 1 até o 3,mas o índice 3 não é incluído