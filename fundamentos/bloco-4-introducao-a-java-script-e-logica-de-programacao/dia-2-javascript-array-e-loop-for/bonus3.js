let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayAlterado = [];

for (let i = 0; i < numbers.length; i++){
    arrayAlterado[i] = numbers[i] * numbers[i + 1];    
    let ultimoElemento = numbers[numbers.length - 1];
    if (numbers[i] == ultimoElemento){
        ultimoElemento *= 2;
        arrayAlterado[i] = ultimoElemento;
    }
}    
for (let i = 0; i < arrayAlterado.length; i++){    
    console.log(arrayAlterado[i]);
}
    
