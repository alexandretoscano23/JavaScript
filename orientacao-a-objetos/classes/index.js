//mesma forma da pasta 'funções e instâncias' só que é uma maneira mais fácil de retratar

class UserData{
    constructor(name, email, passWord){ //constructor - para passar os parâmetros
        this.name = name;
        this.email = email;
        this.passWord = passWord;
    }

    printUserData(){ //ao invés de usar a palavra function, com class ja pode colocar o nome dela e o que quer que retorne
        return ('Nome:' + '  ' + this.name + '  -  ' + 'Email:' + ' ' + this.email) + '  -  ' + 'Senha:' + ' ' + this.passWord;
    }

}

class NewUser extends UserData{ //passa todos os valores de UserData para o NewUser,podendo colocar valores diferentes para os mesmos parâmetros e classe
    constructor(name,email,passWord, phone){
        super(name,email,passWord); //invoca o construtor da classe pai, que são os parâmetros.

        this.phone = phone; //pode criar novos parâmteros só para esta classe
    }

    PrintPhone(){
        return ('Telefone:' + '  ' + this.phone);
    }
}

//mesmo esquema para mostrar os dados e criar o objeto

user = new UserData('Alexandre', 'alexandre@gmail.com', '132435');
console.log(user.printUserData());

newUser = new NewUser('Cleiton','cleiton@gmail.com','123', '83 991324567');
console.log(newUser.printUserData());

console.log(newUser.PrintPhone());//novo parâmetro que foi criado para a classe NewUser

