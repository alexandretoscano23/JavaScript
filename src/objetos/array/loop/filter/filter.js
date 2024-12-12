//produtos
const products = [
  { name: "Notebook", price: 2499, fragile: true },
  { name: "iPad Pro", price: 4199, fragile: true },
  { name: "Copo de Vidro", price: 12.49, fragile: true },
  { name: "Copo de Plástico", price: 18.99, fragile: false },
];

//produto caro e frágil

const fragile = (product) => product.fragile;
const expensive = (product) => product.price >= 500;

console.log(products.filter(expensive).filter(fragile));

//carros
const cars = [
  { name: "Fusca", year: 1980, used: true },
  { name: "Gol", year: 1999, used: true },
  { name: "Uno", year: 2004, used: true },
  { name: "Onix", year: 2019, used: false },
  { name: "Civic", year: 2020, used: false },
  { name: "Corolla", year: 2021, used: false },
  { name: "Ferrari", year: 2022, used: true },
  { name: "Lamborghini", year: 2023, used: true },
  { name: "Tesla", year: 2024, used: false },
];

//carros acima de 2019 e não usados
const notUsed = car => car.used === false;
const newCar = car => car.year > 2019;

console.log( cars.filter(notUsed).filter(newCar));
