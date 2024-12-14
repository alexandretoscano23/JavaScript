//funções contrutoras com factory
function pessoa(nome){ //função construtora
    this.nome = nome; //nome da pessoa

    this.falar = function(){ //função para mostrar o nome da pessoa
        console.log(`Meu nome é ${this.nome}`); //mostrar o nome da pessoa
    }
}

const pessoa1 = new pessoa("João"); //criar um novo objeto
pessoa1.falar(); //mostrar o nome da pessoa

//produtos
function produtos(nome, preco){ //função construtora
    this.nome = nome; //nome do produto
    this.preco = preco; //preço do produto

    this.precoProduto = ()=>{ //função para mostrar o preço do produto
        console.log(`O produto ${this.nome} custa R$ ${this.preco}`); //mostrar o preço do produto
    }
}

const produto1 = new produtos("Notebook", 2500); //criar um novo produto
produto1.precoProduto(); //mostrar o preço do produto

//produto com desconto
function produtoDesconto(nome, preco){ //função construtora
    this.nome = nome; //nome do produto
    this.preco = preco; //preço do produto
    this.desc = 10; //desconto de 10%  
    this.calc = this.preco - (this.desc / 100) * this.preco; //calcular o desconto

    this.getPrecoDesconto = ()=>{ //função para mostrar o preço do produto com desconto
        console.log(`O produto ${this.nome} custa R$ ${this.preco} e com desconto de 10% fica - R$ ${this.calc}`); //mostrar o preço com desconto
    }
}

const produto2 = new produtoDesconto("Notebook", 2500);
produto2.getPrecoDesconto();   

//produtos de cabelo
function produtosDeCabelo(product, price){
    this.product = product; //nome do produto
    this.price = price; //preço do produto
    this.coin = 'R$'; //moeda
    this.desc = 10; //desconto de 10%
    this.calc = this.price - (this.desc / 100) * this.price; //0.1 * preço
    this.rounded = this.calc.toFixed(2); //arredondar para 2 casas decimais

    this.getPrice = ()=>{ //função para mostrar o preço do produto com desconto de 10%
        console.log(`O produto ${this.product} tem um preço de ${this.coin} ${this.price} e com desconto de 3% fica - ${this.rounded}`);
    }
}

const hairProduct = new produtosDeCabelo('Esmalte', 7.20) ; //criar um novo produto
hairProduct.getPrice(); //mostrar o preço do produto
const hairProduct2 = new produtosDeCabelo('Creme', 47.80) ; 
hairProduct2.getPrice();


