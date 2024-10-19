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
//podemos criar vários novos valores para a mesma função. Cada valor é um objeto diferente

function Car(color, model){
    this.color = color;
    this.model = model;

    this.printCar = function(){
        return 'Cor:' + ' ' + this.color +' - ' + ' ' + 'Modelo:' + ' ' + this.model; //retorna a cor e o modelo do carro. O + serve para concatenar
    }
}

car = new Car('Preto', 'Civic');
console.log(car.printCar());

car2 = new Car('Azul', 'Opala')
console.log(car2.printCar());

car3 = new Car('Branco', 'Fusca');
console.log(car3.printCar());

car4 = new Car('Verde', 'Gol');
console.log(car4.printCar());


//Energéticos

function Energetic(name, quantity, price, ml){
    this.name = name;
    this.ml = ml
    this.quantity = quantity;
    this.price = price;

    this.getEnergetic = function(){
        return 'Nome:' + ' ' + this.name + ' - ' + 'Quantidade:' + ' ' + this.quantity + ' - ' + 'Preço:' + ' ' + this.price + ' - ' + 'ML:' + ' ' + this.ml;
    }
}


energetic = new Energetic('RedBull', '1', 'R$ 12.00', '250ml');
console.log(energetic.getEnergetic());

energetic2 = new Energetic('Monster', '2', 'R$ 15.00', '500ml');
console.log(energetic2.getEnergetic());

energetic3 = new Energetic('Fusion', '3', 'R$ 12.00', '350ml');
console.log(energetic3.getEnergetic());




