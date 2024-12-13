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

