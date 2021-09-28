// const compararNumeros = (numero, lista) => { 
//     console.log(lista.every(elemento => elemento > numero));
// }       
// compararNumeros(18, [20, 30, 100, 21]);

let compararNumeros = (numero, lista) => {
    let arrayBoleano = [];
    for (let index = 0; index < lista.length; index += 1){
        if (lista[index] > numero){
            arrayBoleano.push(true);
        } else {
            arrayBoleano.push(false);
        }
    }
    return arrayBoleano.includes(false) ? false : true;
}

console.log(compararNumeros(18, [21, 22, 100, -21]));

