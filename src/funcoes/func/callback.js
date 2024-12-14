//callerback é uma função que é chamada quando um evento acontece
const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, index) {
  // o index é o índice do array - +1 é para começar a contar do 1
  console.log(`${index + 1}. ${nome}`); //índice e o nome
}

//evento de loop
fabricantes.forEach(imprimir); //para cada elemento do array, chama a função imprimir

//array de notas
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

const notasBaixas = notas.filter(function (nota) {
  //filter é uma função que filtra os elementos de um array
  return nota < 7; //retorna as notas menores que 7
});

console.log(notasBaixas);
