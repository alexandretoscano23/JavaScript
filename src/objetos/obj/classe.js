//classe Lançamento
class Release {
  constructor(name = "genérico", value = 0) {
    //essa classe será transformada em uma função construtora
    this.name = name; //receber o nome do parâmetro
    this.value = value; //receber o valor do parâmetro
  }
}

class FinancialCycle {
  constructor(month, year) {
    this.month = month;
    this.year = year;
    this.releases = [];
  }

  //cada parâmetro(lançamento) será adicionado ao array releases
  addReleases(...releases) {
    releases.forEach((r) => this.releases.push(r));
  }

  //Para cada lançamento, somar ao valor consolidado
  summary() {
    let consolidatedValue = 0;
    this.releases.forEach((r) => {
      consolidatedValue += r.value;
    });
    return consolidatedValue;
  }
}

const salary = new Release("Salary", 45000);
const electricityBill = new Release("Electricity Bill", -220);

const bills = new FinancialCycle(6, 2018);
bills.addReleases(salary, electricityBill);

console.log(bills.summary());

//protótipos
class Grandfather {
  constructor(lastName) {
    //função construtora
    this.lastName = lastName;
  }
}

//class Father herda de Grandfather - relação de protótipo
class Father extends Grandfather {
  constructor(lastName, profession = "Teacher") {
    super(lastName); //chama a função contrutora do protótipo GrandFather
    this.profession = profession;
  }
}

class Son extends Father {
  constructor() {
    super("Silva");
  }
}

const son = new Son();
console.log(son);

//classe de desconto
class Discount {
  constructor(product, discount = 0) {
    this.product = product;
    this.discount = discount;

    this.discontValue = function () {
      return this.product - this.product * (this.discount / 100);
    };
  }
}

const product1 = new Discount(180, 10);
console.log(product1.discontValue());

const product2 = new Discount(100, 10);
console.log(product2.discontValue());

//dados do usuário
class Data {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

class Data2 extends Data {
  constructor(name, lastName, age, email) {
    super(name, lastName);
    this.age = age;
    this.email = email;
  }
}

class Data3 extends Data2 {
  constructor(name, age, lastName, email, profession, city) {
    super(name, age, lastName, email);
    this.profession = profession;
    this.city = city;
  }
}

const user1 = new Data3(
  "Alexandre",
  "Toscano",
  18,
  "alexandre12@gmail.com",
  "Developer",
  "João Pessoa"
);
console.log(user1);
