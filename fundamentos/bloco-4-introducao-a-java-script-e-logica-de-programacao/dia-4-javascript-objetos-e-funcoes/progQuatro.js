function indiceDeMaiorValor(parametroArray){
    let menor = parametroArray[0];
    for (let index in parametroArray){
        if (parametroArray[index] < menor){
            menor = parametroArray[index];
        }        
    }
    return parametroArray.indexOf(menor);   
}

let array = indiceDeMaiorValor([2, 4, 6, 7, 10, 0, -3]);

console.log(array);