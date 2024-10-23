//Trabalhando com Ajax

//A página web se comunica com o servidor sem precisar recarregar a página

//requisição ajax

let request = new XMLHttpRequest(); //cria um novo objeto. Envia a solicitação ao servidor e traz de volta a resposta.
request.open('GET','https://jsonplaceholder.typicode.com/todos/1', true); //Get - indica que queremos receber os dados do servidor. URL - endereço do servidor. True - indica que a requisição é assincrona. O script continua executando enquanto o navegador aguarda a resposta do servidor

request.onload = function(){ //função que será executada quando a requisição for concluída. Onload é quando o servidor responde com os dados
    if(this.status >= 200 && this.status < 400){ //this.status - status da resposta do servidor (entre 200 e 400 indica sucesso, maior que 400 indica error)
       let data = JSON.parse(this.response);//se o código de status for positivo, converte a resposta em um objeto javaScript com JSON.parse
       console.log(data); //imprime o objeto com os datos recuperados.
    }
}

request.onerror = function(){ //função que será executada se a requisição falhar. Onerror é acionado se a requisição falhar por algum motivo(erro de rede, servidor fora do ar...)

}

request.send();//envia a requisição ao servidor


//fetch

//fetch é uma API moderna para fazer requisições HTTP. É mais poderosa e flexível que o XMLHttpRequest

fetch('https://jsonplaceholder.typicode.com/posts',{
    //loguin
    method: 'POST', //enviar dados para o servidor
    body: JSON.stringify({ //define o corpo da requisição. JSON.stringify converte um objeto javaScript em uma string no formato JSON
        title:'Danki Code', //título do conteúdo
        body:'Meu Conteúdo', //corpo do conteúdo
        userId:1 //id do usuário
    }),
    headers:{ //cabeçalho da requisição
        'Content-type': 'application/json; charset=UTF-8' //informa ao servidor o tipo de de conteúdo sendo enviado (JSON) e a codificação de caracteres (UTF-8)
    }

}).then(response => response.json()).then(json => console.log(json)); //Primeiro then que recebe response json - converte a resposta em um objeto javaScript. Segundo then que recebe json - imprime o objeto com os dados recuperados