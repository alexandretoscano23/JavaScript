const pai = { nome: "Pedro", corCabelo: "preto" };
const filha1 = Object.create(pai);
filha1.nome = "Ana";
console.log(filha1.corCabelo); // preto

const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
});

filha2.nome = "Pam";
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança: ${key}`);
}

//sapato
const sapato = { marca: "nike" };
const tenis = Object.create(sapato);
tenis.cor = "preto";
console.log(`Temos o tênis da marca ${tenis.marca} e cor ${tenis.cor}`);

console.log(Object.keys(tenis));
for (let key in tenis) {
  tenis.hasOwnProperty(key) ? console.log(key) : console.log(`Herança: ${key}`);
}

//número do sapato
const numero = Object.create(sapato);
numero.numero = 43;
console.log(`Temos o tênis da marca ${numero.marca} e número ${numero.numero}`);

for (let key in numero) {
  numero.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Herança de "${key}"`);
}

const cor = Object.create(sapato);
cor.cor = "azul";

console.log(`Temos o tênis da marca ${cor.marca}e cor ${cor.cor}`);

//celular
const produtos = { produto: "Celular" };
const celular = Object.create(produtos);
celular.marca = "Sansung";
celular.modelo = "Galaxy";
celular.preco = 1500;
console.log(
  `O ${celular.produto} da marca ${celular.marca} modelo ${celular.modelo} custa R$ ${celular.preco}`
);

for (let key in celular) {
  celular.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Tem a Herança de "${key}"`);
}
