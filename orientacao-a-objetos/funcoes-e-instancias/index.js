function peopple(){
    this.name = 'Alexandre'; //this é uma variável que se refere ao objeto em questão
    this.printName = function(){ //cria uma função que vai mostrar o valor de name na tela
        alert(this.name);
    }
};

var peopple = new peopple(); //cria um novo objeto a partir da função peopple.

peopple.printName(); //chama a função printName

peopple.name = 'Cleber'; //altera o valor da propriedade name do objeto peopple

console.log(peopple.name); //altera o valor do novo objeto criado


//criando uma outra função, ao invés de criar um novo objeto, podemos criar um novo a partir de uma função 

function animal(name, weight, color){
    this.name = name;
    this.weight = weight;
    this.color = color;
}
