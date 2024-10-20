//praticando classes

 class User1{
     constructor(name,age,email){
         this.name = name;
         this.age = age;
         this.email = email;
     }

     getUser1(){
         return('Nome:' + ' ' + this.name + ' - ' + 'Idade:' + ' ' + this.age + ' - ' + 'Email:' + ' ' + this.email);
     }
 }

 user1 = new User1('Alexandre', 25, 'alexandre@gmail.com');
 console.log(user1.getUser1());


// //class User 2 com os mesmos parâmetros

 class User2 extends User1{
     constructor(name,age,email,phone){
         super(name,age,email);

         this.phone = phone;
     }

     getPhone(){
         return 'Telefone:' + ' ' + this.phone;
     }
 }

 user2 = new User2('João Vitor', 24, 'jovitor4@gamil.com','83 999344322');
 console.log(user2.getUser1());
 console.log(user2.getPhone());


 class User3 extends User2{
     constructor(name,age,email,phone,city){
         super(name,age,email,phone);

         this.city = city;
     }

     getCity(){
         return 'Cidade:' + ' ' + this.city;
     }
 }

 user3 = new User3('Thiago Marques', 18, 'thiago@gmail.com', '83 993992994', 'João Pessoa');

 console.log(
     user3.getUser1(),
     user3.getPhone(),
     user3.getCity()
 );

console.log('Dados do estudante ->')

//coletando dados do estudante

class Student{
    constructor(name,period,rgm,email){
        this.name = name;
        this.period = period;
        this.rgm = rgm;
        this.email = email;
    }

    getStudent(){
        return 'Nome:' + ' ' + this.name + ' - ' + 'Período:' + ' ' + this.period + ' - ' + 'RGM:' + ' ' + this.rgm + ' - ' + 'Email Acadêmico:' + ' ' + this.email;

    }
}

student1 = new Student('Alexandre', '2 período','321.432.123', 'alexandreunipe@gmail.com');
console.log(student1.getStudent());

class Student2 extends Student{
    constructor(name,period,rgm,email){
        super(name,period,rgm,email);
    }
}


student2 = new Student('Pammelli', '3 período', '123.432.123','pamellioliveira@edu.cs');
console.log(student2.getStudent());


student3 = new Student('João Vitor', '4 período', '123.324.123','joaovitor@edu.cs');
console.log(student3.getStudent());


student4 = new Student('Thiago Marques', '3 período', '344.544.123', 'thiagomarques@gmail.edu');
console.log(student4.getStudent());


//carros

console.log('Carros ->')
class Car{
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    getCar(){
        return 'Modelo:' + ' ' + this.model + ' - ' + 'Ano:' + ' ' + this.year + ' - ' + 'Cor:' + ' ' + this.color; 
    }
}

car1 = new Car('Civic', '2020', 'Preto');
console.log(car1.getCar());

car2 = new Car('Gol', '2019', 'Branco');
console.log(car2.getCar());

car3 = new Car('Onix', '2018', 'Prata');
console.log(car3.getCar());

class Car4 extends Car{
    constructor(model,year,color,price){
        super(model,year,color);
        this.price = price;
    }

    getPrice(){
        return 'Preço: R$' + ' ' + this.price;
    }
}

car4 = new Car4('Fusca', '1970', 'Azul', 15.500);
console.log(
    car4.getCar(), 
    car4.getPrice()
);