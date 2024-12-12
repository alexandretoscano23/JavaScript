const littleCart = [
  '{"name": "Eraser", "price": 3.45}',
  '{"name": "Notebook", "price": 13.90}',
  '{"name": "Pencil Kit", "price": 41.22}',
  '{"name": "Pen", "price": 7.50}',
];

// Retornar uma array apenas com os preços
const toObject = (js) => JSON.parse(js); // Converte um texto para objeto
const onlyPrice = (product) => product.price;

const result = littleCart.map(toObject).map(onlyPrice);
console.log(result);

//cachorros
const dogs = [
  '{"race": "Golden Retriever", "age": 3, "weight": 26.80}',
  '{"race": "Bulldog", "age": 2, "weight": 8.50}',
  '{"race": "Poodle", "age": 1, "weight": 5.40}',
  '{"race": "Labrador", "age": 4, "weight": 30.00}',
  '{"race": "Pug", "age": 2, "weight": 6.00}',
  '{"race": "Beagle", "age": 3, "weight": 8.00}',
];

//transformando em objeto
const toObject2 = (json) => JSON.parse(json);
//selecionar apenas a raça
const onlyRace = (dog) => dog.race;

//mapear
const result2 = dogs.map(toObject2).map(onlyRace);
console.log(result2.sort()); //ordenar alfabeticamente

//apenas a idade
const onlyAge = (dog) => dog.age;
const result3 = dogs.map(toObject2).map(onlyAge);
console.log(`Idades: ${result3}`);

//apenas o peso
const onlyWeight = (dog) => dog.weight;
const result4 = dogs.map(toObject).map(onlyWeight);
console.log(`Pesos: ${result4}`);


//carros
const cars = [
    '{"brand": "Fiat", "model": "Uno", "year": 2000}',
    '{"brand": "Chevrolet", "model": "Corsa", "year": 2002}',
    '{"brand": "Ford", "model": "Ka", "year": 2005}',
    '{"brand": "Volkswagen", "model": "Gol", "year": 2008}',
    '{"brand": "Fiat", "model": "Palio", "year": 2010}',
    '{"brand": "Chevrolet", "model": "Onix", "year": 2015}',
]

//transformar em objeto
const obj = js => JSON.parse(js);
//apenas a marca
const onlyBrand = car => car.brand;
//mapear
const result5 = cars.map(obj).map(onlyBrand);
console.log(result5.sort())