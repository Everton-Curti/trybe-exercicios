function elementoRepetido(arrayPassado){
    numeroRepetido = 0;
    for (let index = 0; index < arrayPassado.length; index += 1){
        for (let indexTwo = 0; indexTwo < arrayPassado.length; indexTwo += 1){
            if (arrayPassado[index] === arrayPassado[indexTwo]){
                numeroRepetido += 1;
            }
        }
    }
    return numeroRepetido;
}

console.log(elementoRepetido([2, 3, 2, 5, 8, 2, 3]));
