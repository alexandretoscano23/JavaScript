function carro(velocidadeMaxima = 200, delta = 5) { //delta - acelerar de 5 em 5
  //atributo privado
  let velocidadeAtual = 0;

  //metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) { //se a velocidade atual mais o delta for menor ou igual a velocidade maxima
      velocidadeAtual += delta; //a velocidade atual vai ser a velocidade atual mais o delta
    } else { //a velocidade não vai passar do máximo
      velocidadeAtual = velocidadeMaxima;
    }
  };

  //metodo publico
  this.getVelocidadeAtual = function () { //retornar para o publico a velocidade atual	
    return velocidadeAtual;
  };
}

const uno = new carro();
uno.acelerar(); //5
console.log(uno.getVelocidadeAtual());

const ferrari = new carro(350, 20);
ferrari.acelerar(); //20
ferrari.acelerar(); //40
ferrari.acelerar(); //60
ferrari.acelerar(); //80
console.log(ferrari.getVelocidadeAtual());
