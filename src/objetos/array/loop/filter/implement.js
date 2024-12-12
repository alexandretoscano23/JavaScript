Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

//carros
const cars = [
    { name: "Fusca", year: 1980, used: true },
    { name: "Gol", year: 1999, used: true },
    { name: "Uno", year: 2004, used: true },
    { name: "Onix", year: 2019, used: false },
    { name: "Civic", year: 2020, used: false },
    { name: "Corolla", year: 2021, used: false },
    { name: "Ferrari", year: 2022, used: true },
    { name: "Lamborghini", year: 2023, used: true },
    { name: "Tesla", year: 2024, used: false },
  ];
  
  //carros acima de 2019 e não usados
  const notUsed = car => car.used === false;
  const newCar = car => car.year > 2019;
  
  console.log(cars.filter2(notUsed).filter2(newCar));