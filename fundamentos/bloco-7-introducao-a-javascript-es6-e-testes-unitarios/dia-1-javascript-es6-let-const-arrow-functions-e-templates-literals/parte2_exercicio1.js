// const fatorial = number => {
//     let result = 1;
//     for (let index = 2; index <= number; index += 1){
//         result *= index;
//     }
//     return result;
// }
// console.log(fatorial(0));

const fatorial = number => number > 1 ? number * fatorial(number -1) : 1;
console.log(fatorial(0));