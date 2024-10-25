//array - lista de itens
let itens = [];

//adicionar um evento de click ao botão de cadastrar
document.querySelector('button').addEventListener('click',()=>{
    //nome e valor do produto
    let nameProduct = document.querySelector('input[name=nome_produto]').value; //pegar o valor do input
    let priceProduct = document.querySelector('input[name=valor_produto]').value;

   //cadastrar o array itens
   itens.push({ //"empurrar" um objeto para o array itens.Adicionando valores
    name: nameProduct,
    price: priceProduct
   });

   /* 
     <div class="lista-produtos">
        <div class="lista-produtos-single">
            <h2>RedBull</h2>
            <p>R$ 20,00</p>
        </div>
   */

    //pegar o lista-produtos
    let listProducts = document.querySelector('.lista-produtos');
   
   listProducts.innerHTML = ''; //para limpar a lista - evitar que os itens sejam duplicados
   let soma = 0; //soma começa com 0

   itens.map((val)=>{ //Map - loop pelos itens e recuperar cada valor

    //soma
    soma+= parseFloat(val.price); //Parsefloat transforma a string em um número e recebe o valor do preço
    listProducts.innerHTML += `
    <div class="lista-produtos">
        <div class="lista-produtos-single">
            <h2> `+val.name+`</h2> 
            <p>R$ `+val.price+`</p>
        </div>
    `; //adiciona o nome e o preço no catálogo

    //atualizar o valor total
   let elementTotal = document.querySelector('.soma-produto h2');
   elementTotal.innerHTML = 'R$' + soma; //adicionar o valor da soma no h2
   });//o name e price são os valores (val) que estão no push

   soma = some.toFixed(2); //o valor do preço ficar com apenas duas casas decimais
    
});

//limpar a lista
document.querySelector('.button2').addEventListener('click',()=>{
    itens = []; //zerar os itens
    document.querySelector('.lista-produtos').innerHTML = ''; //zerar a lista
    document.querySelector('.soma-produto h2').innerHTML = 'R$ 00.00'; //zerar o preço
});


