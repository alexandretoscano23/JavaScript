//referênciar um determinado objeto e conseguir acessar seus atributos
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

const bomDia = pessoa.falar.bind(pessoa); //bind - passa um objeto no qual você quer que seja resolvido o this
bomDia();//instanciando a função falar do objeto pessoa

function people(){
    this.idade = 0;

    setInterval(function(){ //Dispara uma outra função a partir de um intervalo de tempo
        this.idade++; //incrementar a idade
        console.log(this.idade);
    }.bind(this), 1000)

}

