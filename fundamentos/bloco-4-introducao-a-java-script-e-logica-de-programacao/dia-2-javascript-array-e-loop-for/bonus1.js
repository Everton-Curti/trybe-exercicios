let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++){
    for (let j = 0; j < numbers.length; j++){
        if (numbers[j] > numbers [i]){
            let auxiliar = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = auxiliar;
        }
    }
}

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
