const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};

console.log(JSON.stringify(obj)); // retorna uma string

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // retorna um objeto
