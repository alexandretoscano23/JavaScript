//filmes mais assistidos
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1',{
    method:'GET'
})//URL da API e GET - pegar informaçoes do servidor
.then(response => response.json()).then(function(json){

    let container = document.querySelector('.container'); //receber a div

    json.results.map(function(val){ //um mapa dentro dos resultados
        container.innerHTML += `
        
        <div"> - `+val.title+`:</div>
        <div" class="description">`+val.overview+` </div>

        <hr>

        
        
        `; //organizar os filmes mais assistidos por linhas. Overview - para aparecer as descrições dos filmes
    })

});
