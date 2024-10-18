function User(){
    this.name = 'Alexandre Toscano Diniz';
    this.age = 25;

    this.printName = function(){ //função printName para exibir o nome do usuário
        console.log(this.name);
    }
    this.printAge = function(){
        console.log(this.age);
    }
}

//mostrar na tela os valores do objeto user
let user = new User();
user.printName();
user.printAge();

//interagir com outro objeto

let User2 = new User(); //mesmo com o mesmo nome de classe, são objetos diferentes com valores diferentes
user.name = 'Pablo';

user.printName(User2.name);

//Atributos na função

function Animal(name, weight){
    this.name = name;
    this.weight = weight;
}

Animal1 = new Animal('Cachorro','- 12kg');
Animal2 = new Animal('Gato', '- 5kg');

//mostrar os valores no console

console.log(Animal1.name, Animal1.weight); //para mostrar, é nescessário colocar a variável que deseja mostrar e o atriuto. Não o nome da função
console.log(Animal2.name, Animal2.weight);


//objeto como parâmetro

function Car(){
    this.color = 'Preto';
    this.model = 'Fusca';

    this.printCar = function(){
        return 'Cor:' + ' ' + this.color +'.' + ' ' + 'Modelo:' + ' ' + this.model; //retorna a cor e o modelo do carro. O + serve para concatenar
    }
}

car = new Car();

console.log(car.printCar());




