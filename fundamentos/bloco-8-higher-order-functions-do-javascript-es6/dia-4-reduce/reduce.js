let array = [1, 2, 3, 4, 5, 6, 8, 9, 15, 20]; //73
let arrarString = ['meu', 'nome:', 'everton', 'ricardo', 'silva', 'curti'];
let arrayObject = [
    { nome: 'adriano', email: 'didico@'},
    { nome: 'everton', email: 'everton@'},
    { nome: 'xula', email: 'xula@'},
    { nome: 'oscar', email: 'oscar@'},
];

// let soma = array.reduce((acum, next) => {
//     return acum + next;
// });

// const somarPares = array
//   .filter((arr) => arr % 2 !== 0)
//   .reduce((acum, next) => acum + next);

// console.log(somarPares);

// let reduceString = arrarString.reduce((acum, next) => {
//     return `${acum} ${next}`;
// });
// console.log(reduceString);

const reduceObjeto = arrayObject.reduce((acum, next) => {    
    acum[next.nome] = next.email;
    return acum;    
}, {});
console.log(reduceObjeto);

