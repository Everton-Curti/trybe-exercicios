function arrayQtdCaracteres(inputArray){
    let maiorNome = inputArray[0];
    for (let index in inputArray){
        if (inputArray[index].length > maiorNome.length){
            maiorNome = inputArray[index];
        }    
    }
    return maiorNome;
}

let array = arrayQtdCaracteres(['José', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana']);

console.log(array);