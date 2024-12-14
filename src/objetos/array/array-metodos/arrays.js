let aproved = ['Bia', 'Carlos', 'Ana'];


console.log(aproved[0]) //primeiro index - Bia

aproved[3] = 'Paulo'; //adiciona um novo elemento no array
aproved.push('Carlos') //adiciona um novo elemento no array

console.log(aproved.length) //tamanho do array

aproved[9] = 'Arthur'; //não da erro mas de 6 a 9 ficam undefined 
console.log(aproved)
aproved.sort() //ordena o array em ordem alfabetica
console.log(aproved)

delete aproved[1] //deleta o elemento do array
console.log(aproved)

aproved = ['Bia', 'Carlos', 'Ana'];
//aproved.splice(1, 2) //primeiro parametro é o index e o segundo é a quantidade de elementos que serão deletados
aproved.splice(1, 1, 'Elemento1', 'Elemento2') //primeiro parametro é o index, o segundo é a quantidade de elementos que serão deletados e os outros são os elementos que serão adicionados
console.log(aproved)