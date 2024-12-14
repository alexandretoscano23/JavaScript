Array.prototype.reduce2 = function(callback, initialValue) {
    const initialIndex = initialValue ? 0 : 1;
    let acumulator = initialValue || this[0];
    for(let i = initialIndex; i < this.length; i++) {
        acumulator = callback(acumulator, this[i], i, this);
    }
    return acumulator;
}

const soma = (total, value) => total + value;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma, 21)); 