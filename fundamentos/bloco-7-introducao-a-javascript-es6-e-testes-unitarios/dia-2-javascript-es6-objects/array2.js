const compararNumeros = (numero, lista) => { 
    console.log(lista.every(elem => elem > numero));
}       
compararNumeros(18, [20, 30, 1, 21]);