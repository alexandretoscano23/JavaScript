//função para desacelerar a nav
function slowDown(velocity, printer){
    let deceleration = 50;

    //laço para ver enquanto a velocidade da nav for maior que 0
    while(velocity > 0){
        printer(velocity);
        velocity -= deceleration; //decrementando em 20
    }

    alert('Nav parada. Comporta pode ser aberta.');
}; 

let velocityActual = 150;

slowDown(velocityActual, (vel)=>{
    alert(`
        Velocidade atual: ${vel} km/h   
    `);
});