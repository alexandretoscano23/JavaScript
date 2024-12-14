const sequencia = {
  _valor: 1, //convenção
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(sequencia.valor, sequencia.valor);

const sequencia2 = {
  _valor: 10,
  get valor2() {
    return this._valor--;
  },
  set valor2(valor) {
    if (valor < this._valor) {
      this.valor = valor;
    }
  },
};

console.log(sequencia2.valor2, sequencia2.valor2);
