function indiceDeMaiorValor(parametroArray){
    let maior = parametroArray[0];
    for (let index in parametroArray){
        if (parametroArray[index] > maior){
            maior = parametroArray[index];
        }        
    }
    return parametroArray.indexOf(maior);    
}

let array = indiceDeMaiorValor([2, 3, 6, 7, 10, 1]);

console.log(array);

