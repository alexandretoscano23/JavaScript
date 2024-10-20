//trabalhando com datas

let date = new Date();
console.log(
    date.getDate(), //dia do mês
    date.getDay(), //dia da semana
    date.getFullYear(), //ano atual
    date.getHours(), //hora atual
    date.getMinutes(), //minuto atual
    date.getMonth(), //mês atual
);

//interpretar data

let date2 = new Date('10/22/2024'); //mês/dia/ano - formato americano
console.log(
    date2.getDate(), //mostra o dia que foi configurado
);

//calculando diferenças de datas - em milissegundos(1s = 1000ms)

let date3 = new Date('11/2/2024');
let date4 = new Date('11/10/2024');

let calc = (date4.getTime() - date3.getTime()) / (1000 * 3600 * 24); //transformando milissegundos em dias -> milissegundos * 1 hora(3600s) * 24 horas

console.log(calc); //mostra a diferença de dias entre as datas
//* no caso, 8 dias de diferença
