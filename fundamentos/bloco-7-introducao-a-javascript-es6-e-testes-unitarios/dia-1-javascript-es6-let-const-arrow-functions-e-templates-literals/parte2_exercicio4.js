const funcaoUm = (frase, palavra) => {
    let procuraX = frase.split(' ');
    for (let index = 0; index < procuraX.length; index += 1){
        if (procuraX[index] === 'x'){
            procuraX[index] = palavra;
        }
    }
    return procuraX.join(' ');
}
console.log(funcaoUm("Tryber x aqui!", "Bebeto"));