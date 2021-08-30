let n = 5;
let symbol = '*';
let inputString = '';
let posicao = n;

for (let index = 0; index < n; index += 1){
    for (let colIndex = 0; colIndex <= n; colIndex += 1){
        if (colIndex < posicao){
            inputString += ' '; 
        }else{
            inputString += symbol;
        }
    }
    console.log(inputString);
    inputString = '';
    posicao -= 1;
}
