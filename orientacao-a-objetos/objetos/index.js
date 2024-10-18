//objetos - 

let userData= {
    'name' : 'Alexandre',
    'age' : 37,
    'email' : 'alexandre@gmail.com',
    'profession' : 'cantor'

};

console.log(userData.name); //chama o valor do objeto name

//array com objetos - vários objetos dentro de uma array, cada chave é um objeto. Sempre separar por vírgula

let usersData = [
    
{
    'name' : 'Felipe',
    'age' : 25,
    'email' : 'felipe@gmail.com',
    'profession' : 'pedreiro'
},


{
    'name' : 'Ana',
    'age' : 30,
    'email' : 'ana@gmail.com',
    'profession' : 'designer'
},

{
    'name' : 'Ricardo',
    'age' : 40,
    'email' : 'ricardo@gmail.com',
    'profession' : 'pintor'
}


];
console.log(usersData[0].name);//pega o valor correspondente,depois do ponto, do primeiro objeto
//como agora é um array, tem que colocar o índice do objeto que queremos pegar com [].

//Notícias

let news = [

    {
        'Title' : 'Queimadas na Amazônia',
        'Subtitle' : 'Aumento de 50% em relação ao ano passado',
        'Content' : 'O número de queimadas na Amazônia aumentou 50% em relação ao ano passado. O desmatamento e as queimadas são as principais causas de destruição da floresta amazônica. O governo federal tem sido criticado por não tomar medidas efetivas para conter o desmatamento e as queimadas.',
        'Author' : 'Alexandre Toscano'
    },

    {
        'Title' : 'Coronavírus',
        'Subtitle' : 'Número de casos aumenta no Brasil',
        'Content' : 'O número de casos de coronavírus aumentou no Brasil. O Ministério da Saúde confirmou 100 novos casos em São Paulo. O governo federal tem sido criticado por não tomar medidas efetivas para conter a propagação do vírus.',
        'Author' : 'Alexandre Toscano'
    },

    {
        'Title' : 'Protestos nos EUA',
        'Subtitle' : 'Manifestantes pedem justiça',
        'Content' : 'Manifestantes protestam nos EUA pedindo justiça',
        'Author' : 'Alexandre Toscano'

    }

];

console.log(news[0].Content);


let games = [
    {
        'Title': 'The Last of Us Part II',
        'Genere': 'Ação/Aventura',
        'Developer': 'Naughty Dog',
        'Publisher': 'Sony Interactive Entertainment',
        'Release Date': '19/06/2020'


    },


    {
        'Title': 'God of War',
        'Genere': 'Ação/Aventura',
        'Developer': 'Santa Monica Studio',
        'Publisher': 'Sony Interactive Entertainment',
        'Release Date': '20/04/2018'
    },

    {
        'Title': 'Red Dead Redemption 2',
        'Genere': 'Ação/Aventura',
        'Developer': 'Rockstar Games',
        'Publisher': 'Rockstar Games',
        'Release Date': '26/10/2018'
    }


];

console.log(games[1].Title);