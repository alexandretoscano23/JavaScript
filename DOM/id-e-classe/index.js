//manipulando por id

//adicionando um estilo de css pelo js
let id = document.getElementById('div-js');
id.style.width = '100px'; //adiciona uma largura de 100px
id.style.height = '100px'; //adiciona uma altura de 100px
id.style.backgroundColor = 'red'; //adiciona uma cor de fundo
id.style.border = '2px solid black'; //adiciona uma borda
id.style.boxShadow = '2px 6px 22px'; //adiciona uma sombra


//manipulando por classe

let clas = document.getElementsByClassName('box');

let class1 = clas[0];

class1.style.marginTop = '120px';
class1.style.width = '100px'; //adiciona uma largura de 100px
class1.style.height = '100px'; //adiciona uma altura de 100px
class1.style.backgroundColor = 'gold'; //adiciona uma cor de fundo
class1.style.border = '2px solid black'; //adiciona uma borda
class1.style.boxShadow = '2px 6px 22px'; //adiciona uma sombra
