//Reverter um elemento de uma string
String.prototype.reverse = function () {
  return this.split("").reverse().join(""); //inverter a sring e juntar com o join
};

console.log("Alexandre".reverse());

//primeiro elemento de uma array
Array.prototype.first = function () {
  return this[0];
};

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].first());
