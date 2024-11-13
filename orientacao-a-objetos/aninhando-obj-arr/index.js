//Aninhando objetos e arrays

let userData = {
    name : 'Alexandre',
    age : 18,
    favoriteGames : ["The Last of Us I", "The Last of Us II", "Red Dead Redemption II"]
}

userData.email = 'alexandre3@gmail.com';

//adicionar mais um jogo
userData.favoriteGames.push("God of War");//push é um método de array que adiciona um elemento ao final do array

console.log(userData);

//objeto dentro de array

let usersData = [
    {
        name : 'Alexandre',
        age : 18,
        email : 'alexandre@gmail.com'
    },

    {
        name : 'João',
        age : 20,
        email : 'joao@gmail.com'
    },

    {
        name : 'Gustavo',
        age : 40,
        email : 'gustavo@gmail.com'
    }
];

//loop por cada elemento do array
usersData.forEach(users => {
    console.log(`
        Nome : ${users.name} 
        Idade : ${users.age}
        Email : ${users.email}
    `);
});

//função dentro de objeto

let messsage = {
    name : 'Função que envia mensagem', //propriedade
    sendMessage : () =>{ //método
        return 'Mensagem enviada com sucesso.';
    }
}

console.log(messsage.sendMessage());



