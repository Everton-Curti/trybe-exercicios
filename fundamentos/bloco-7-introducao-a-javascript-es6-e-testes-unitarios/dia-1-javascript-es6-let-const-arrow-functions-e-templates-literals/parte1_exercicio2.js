const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) =>{
    if (a > b){
        return 1;
    } else if(a < b){
        return -1;
    }
});

console.log(`Array Ordenado: ${oddsAndEvens}`);