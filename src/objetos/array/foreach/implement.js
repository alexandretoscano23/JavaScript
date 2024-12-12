//criando o foreah
Array.prototype.forEach2 = function(callback){ 
    for(let i = 0; i < this.length; i++){ 
        callback(this[i], i, this); //elemento, indice, array
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
aprovados.forEach2((e,i)=>{
    console.log(`${i + 1}) ${e}`);
});