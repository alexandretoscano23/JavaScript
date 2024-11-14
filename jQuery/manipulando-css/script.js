$(window).on('load', function(){
    //mudar a cor de fundo da div
    $('div').css('background-color', '#ccc').css('color', 'darkred');

    // padding - tem que definir cada lado
    $('div').css('padding-left', '20px');
    $('div').css('padding-right', '20px');
    $('div').css('padding-top', '20px');
    $('div').css('padding-bottom', '20px');

    // chamando por id
    setTimeout(function(){
        $('#test').css('background-color', 'lightblue');
    }, 2000);

    // pegar um elemento dentro de outro
    setTimeout(()=>{
        $('div > p').css('color','green');
    }, 2000);
});