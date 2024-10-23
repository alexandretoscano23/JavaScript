let span = document.querySelector('.container span'); //selecionando o span

span.addEventListener('click', ()=>{ //adicionar um evento de click no span
   let anim = document.querySelector('.container p').classList.toggle('anim'); //toggle adiciona uma classe se não existir e remove se ja existe. Então, ao clicar de volta do ver mais, o conteúdo some

   if(anim){ //se existir a classe anim(se o conteúdo estiver visível)
        span.innerHTML = 'Ver Menos:';
   }else{ //se não
    span.innerHTML = 'Ver Mais:';
   }
});