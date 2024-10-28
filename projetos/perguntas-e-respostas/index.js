//recuperando todos os inputs do tipo radio
let inputs = document.querySelectorAll('input[type=radio');

//enquanto i for menor ou igual a quantidade de inputs
for(let i = 0;i <= inputs.length;i++){ 
    //adiciona um evento de mudança quando o input for clicado
    inputs[i].addEventListener('change', (input)=>{ 
        //recupera o valor do input clicado
        let check = input.target.value; 
        //se a resposta for verdadeira ou falsa
        if(check === "correta"){
           let parentNode = input.target.parentNode;//pai do elemento (div)
           parentNode.style.backgroundColor = 'green'


            let parent = parentNode.parentNode.querySelectorAll('input[type=radio]'); //pai do pai do elemento (form)

            //quando algum input for selecionado,desabilita os outros
            for(let n = 0;n < parent.length; n++){
                parent[n].disabled = true;
            }

        }else if(check === "incorreta"){
            let parentNode = input.target.parentNode;//pai do elemento (div)
           parentNode.style.backgroundColor = 'red'


            let parent = parentNode.parentNode.querySelectorAll('input[type=radio]'); //pai do pai do elemento (form)

            //quando algum input for selecionado,desabilita os outros
            for(let n = 0;n <= parent.length; n++){
                //mostrar qual a correta
                let correta = parentNode.parentNode.querySelector('[value=correta]');
                correta.parentNode.style.backgroundColor = 'green';
                parent[n].disabled = true;
            }
        }
    })//add
}//for

