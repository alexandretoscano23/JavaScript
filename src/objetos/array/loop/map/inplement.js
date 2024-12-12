//recriando o map
Array.prototype.map2 = function(callback){
    const newArray = []; //gera um novo array
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}
//materiais de construção
const materials = [
    '{"name": "Cement", "price": 20.00}', //cimento
    '{"name": "Steel", "price": 50.00}', //aço
    '{"name": "Brick", "price": 0.50}', //tijolo
    '{"name": "Tile", "price": 1.00}', //telha
    '{"name": "Sand", "price": 1.20}', //areia
    '{"name": "Gravel", "price": 2.00}', //brita
]

const toObject = js => JSON.parse(js);
const onlyName = material => material.name;
const result = materials.map2(toObject).map2(onlyName);
console.log(result.sort());