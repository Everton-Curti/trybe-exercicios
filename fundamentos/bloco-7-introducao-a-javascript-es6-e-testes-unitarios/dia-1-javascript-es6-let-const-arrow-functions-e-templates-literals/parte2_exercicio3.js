const clickCount = () => {
    let contando = 0;
    let botao = document.getElementById('botao');
    let cont = document.getElementById('contador');
    cont.value = contando;

    botao.addEventListener('click', () => {
        contando += 1;    
        cont.value = contando;
    });
}
clickCount();

