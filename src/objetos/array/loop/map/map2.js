const littleCart = [
    '{"name": "Eraser", "price": 3.45}',
    '{"name": "Notebook", "price": 13.90}',
    '{"name": "Pencil Kit", "price": 41.22}',
    '{"name": "Pen", "price": 7.50}',
]

// Retornar uma array apenas com os preços
const toObject =  js => JSON.parse(js); // Converte um texto para objeto
const onlyPrice = product => product.price;

const result = littleCart.map(toObject).map(onlyPrice);
console.log(result);