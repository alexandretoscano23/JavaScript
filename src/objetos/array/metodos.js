const pilots = [
  "Hamilton",
  "Verstappen",
  "Vettel",
  "Leclerc",
  "Sainz",
  "Norris",
];
pilots.pop(); // Remove o último elemento do array
console.log(pilots);

pilots.push("Ricciardo"); // Adiciona um elemento no final do array
console.log(pilots);

pilots.shift(); // Remove o primeiro elemento do array
console.log(pilots);

pilots.unshift("Raikkonen"); // Adiciona um elemento no início do array
console.log(pilots);

//splice pode adicionar e remover elementos

//adicionar
pilots.splice(2, 0, 'Bottas', 'Perez');
console.log(pilots);

//remover
pilots.splice(3, 1); // Remove o elemento na posição 3
console.log(pilots);

const somePilots = pilots.slice(2); // Cria um novo array a partir da posição 2
console.log(somePilots);

const somePilots2 = pilots.slice(1, 4); // Cria um novo array da posição 1 até a 4 (sem incluir a 4)
console.log(somePilots2);

//dogs
const dogs = ['Golden Retriever', 'Bulldog', 'Poodle', 'Labrador', 'Pug', 'Beagle'];

dogs.splice(6, 0, 'Husky', 'Chihuahua');
console.log(dogs);

dogs.push('Doberman');
console.log(dogs);

dogs.pop();
console.log(dogs);

dogs.shift();
console.log(dogs);

dogs.unshift('Rottweiler');
console.log(dogs);

dogs.sort();
console.log(dogs);

dogs.slice(2);
console.log(dogs);

