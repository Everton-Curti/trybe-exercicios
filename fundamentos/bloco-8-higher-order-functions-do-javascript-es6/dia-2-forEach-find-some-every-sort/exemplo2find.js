// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

// // const buscarNumero = () => {
// //     let number = 0;
// //     for (let index = 0; index < numbers.length; index += 1){
// //         if (numbers[index] % 5 === 0){
// //             number = numbers[index];
// //             break;
// //         }
// //     }
// //     return number;
// // }
// // console.log(buscarNumero());

// const buscarNumero = numbers.find((number) => number % 5 === 0);
// console.log(buscarNumero);

//---------------------------------------------------------------

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const divisiveis = numbers.find((number) => {
//     return (number % 3 === 0 && number % 5 === 0);
// });

// console.log(divisiveis);

//-----------------------------------------------------------------

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const check = names.find((name) => {
//     return name.length === 5;
// });

// console.log(check);

//------------------------------------------------------------------

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const procurarMusica = musicas.find((musica) => {
    return musica.id = '31031685';
});

console.log(procurarMusica);


