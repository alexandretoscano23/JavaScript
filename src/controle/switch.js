const imprimirResultado = function (nota) {
  switch (Math.round(nota)) {
    //caso for 10 ou 9 executa um determidado bloco de código
    case 10:
    case 9:
      console.log("Quadro de Honra");
      break; //parar o switch - colocar em cada um dos cases
    case 8:
    case 7:
      console.log("Aprovado");
      break;
    case 6:
    case 5:
    case 4:
      console.log("Recuperação");
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("Reprovado");
      break;
    //se nenhum dos cases for atendido, executa o default
    default:
      console.log("Nota inválida");
  }
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
