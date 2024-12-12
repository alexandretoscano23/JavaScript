//array aprovados
const approved = ["Agatha", "Aldo", "Daniel", "Raquel"];

approved.forEach((e, i) => {
  console.log(`${i + 1}) ${e}`);
});

//retornar os nomes
approved.forEach((name) => console.log(name));

//armazenar uma função em uma variável e passar como parâmetro

const displayApproved = (approved) => console.log(`1) ${approved}`);
approved.forEach(displayApproved);

//terceiro parâmetro - array completo
approved.forEach((name, index, array) => {
  console.log(`${index + 1}) ${name}`);
  console.log(array);
});

//numeros
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
  numbers[index] = number * 2;
});

console.log(numbers);
