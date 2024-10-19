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


//class User 2 com os mesmos parâmetros

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
