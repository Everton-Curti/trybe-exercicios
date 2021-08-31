function arrayQtdCaracteres(inputArray){
    let maiorNome = inputArray[0];
    for (let index in inputArray){
        if (inputArray[index] > maiorNome){
            maiorNome = inputArray[index];
        }    
    }
    return maiorNome;
}

let array = arrayQtdCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

console.log(array);