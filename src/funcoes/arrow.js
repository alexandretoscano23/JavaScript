//quando usado com mais de uma linha
dobro = (a)=>{
    return 2 * a;
}

//apenas em uma linha
dobro = a => 2 * a; //return implícito
console.log(dobro(Math.PI));

let ola = () => 'Olá';

//com o arraow function o this não varia
function people(){
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new people;