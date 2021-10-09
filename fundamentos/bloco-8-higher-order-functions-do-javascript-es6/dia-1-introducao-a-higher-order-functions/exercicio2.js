const sortear = (aposta) => {
    let numeroSorteado = Math.ceil(Math.random() * 5);
    console.log(numeroSorteado);
    if (numeroSorteado === aposta){
        return 'Parabéns você ganhou!';
    } else {
        return 'Tente novamente';
    }
}
console.log(sortear(5));