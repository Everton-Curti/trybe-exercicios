const arrayPar = array => {
    let vazio = [];
    for (let index = 0; index < array.length; index += 1){
        if (array[index] % 2 == 0){
            vazio.push(array[index]);       
        }
    }
    return vazio;
}
console.log(arrayPar([1,2287416,3,4,500006,6,7,8,9]));
