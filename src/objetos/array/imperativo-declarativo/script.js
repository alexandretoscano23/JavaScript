const students = [
    { name: 'John', grade: 7.3},
    { name: 'Maria', grade: 9.2}
];

//impertativo - menos reutilizável ( não é interessante )
let total = 0
for (let i = 0; i < students.length; i++){
    total += students[i].grade; //pegando a nota de cada aluno e atribuindo ao total
}

console.log(total / students.length);

//declarativo mais reutilizável ( é interessante )
const getGrade = student => student.grade; //retornar apenas a nota do aluno
const sum = (total, actual) => total + actual; //retornar a soma total mais a atual
const total2 = students.map(getGrade).reduce(sum);
const avarege = total2 / students.length;
console.log(avarege);
