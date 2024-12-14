const doughters = ['Ana', 'Maria', 'Joana'];
const sons = ['João', 'Pedro', 'Miguel'];
const children = doughters.concat(sons, 'Carlos', 'Lucas'); 
console.log(children);

console.log([].concat([1,2], [3,4,5], 6, [[2,3,4]]));

//cachorros
const dogs = ['Bulldog', 'Poodle', 'Labrador'];
//gatos
const cats = ['Siames', 'Persa', 'Sphynx'];
//aves
const birds = ['Calopsita', 'Periquito', 'Cacatua'];
//animais
const animals = dogs.concat(cats, birds).join(' - ');
console.log(`Todos os anomais da loja: ${animals}`);