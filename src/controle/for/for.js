//enquanto uma condição for verdadeira
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//ex - carrinho

//i++ - incrementa 1 enquanto for verdadeiro
const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
];

let total = 0; //valor total se inicia em 0

for (let i = 0; i < carrinho.length; i++) {
  //enquanto i for menor que o tamanho do carrinho
  let item = carrinho[i]; //itens do carrinho
  let subtotal = item.qtde * item.preco;
  total += subtotal;
  console.log(subtotal);
}

console.log(total.toFixed(2)); //duas casas decimais

//ex - pedidos
const pedidos = [
  { id: 1, status: "entregue" },
  { id: 2, status: "pendente" },
  { id: 3, status: "cancelado" },
  { id: 4, status: "entregue" },
  { id: 5, status: "pendente" },
];

for (let i = 0; i < pedidos.length; i++) {
  let pedido = pedidos[i];

  if (pedido.status === "entregue") {
    console.log(`Pedido ${pedido.id} foi entregue`);
  } else if (pedido.status === "pendente") {
    console.log(`Pedido ${pedido.id} está pendente`);
  } else if (pedido.status === "cancelado") {
    console.log(`Pedido ${pedido.id} foi cancelado`);
  } else {
    console.log(`Status não identificado`);
  }
}

//ex - pagamentos
const pagamentos = [
  { id: 1, status: "pago" },
  { id: 2, status: "pendente" },
  { id: 3, status: "cancelado" },
  { id: 4, status: "pago" },
  { id: 5, status: "pendente" },
];

for (let pagamento of pagamentos) {
  //sem nescessidade de colocar um index

  if (pagamento.status === "pago") {
    console.log(`Pagamento ${pagamento.id} foi pago`);
  } else if (pagamento.status === "pendente") {
    console.log(`Pagamento ${pagamento.id} está pendente`);
  } else if (pagamento.status === "cancelado") {
    console.log(`Pagamento ${pagamento.id} foi cancelado`);
  } else {
    console.log(`não identificado`);
  }

}

