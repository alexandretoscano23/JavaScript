const students = [
  { name: "John", score: 7.3, scholarship: false },
  { name: "Mary", score: 9.2, scholarship: true },
  { name: "Peter", score: 9.8, scholarship: false },
  { name: "Alice", score: 8.7, scholarship: true },
];

//somar todas as notras dos alunos
const result = students.map(a => a.score).reduce(function(acumulator, actual){
    console.log(acumulator, actual);
    return acumulator + actual;
}, 0);

console.log(result);

//somar todos os preços dos produtos
const products = [
  { name: "TV", price: 900 },
  { name: "Notebook", price: 1200 },
  { name: "Iphone", price: 1500 },
  { name: "Samsung", price: 1000 },
  { name: "Xiaomi", price: 700 },
  { name: "Tablet", price: 400 },
  { name: "Smartwatch", price: 300 },
  { name: "Headphone", price: 100 },
];

//selecionar apenas o valor e somar o preço total
const result2 = products.map(p => p.price).reduce(function(acumulador,actual){
  console.log(acumulador, actual)
  return acumulador + actual
});

console.log(result2);
