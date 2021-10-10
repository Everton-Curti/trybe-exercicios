// const students = [
//     { name: 'Maria', grade: 70, approved: '' },
//     { name: 'José', grade: 56, approved: '' },
//     { name: 'Roberto', grade: 90, approved: '' },
//     { name: 'Ana', grade: 51, approved: '' },
//   ];

//   const situacao = () => {
//       for (let index = 0; index < students.length; index += 1){
//         let estudandes = students[index];
//         if (estudandes.grade >= 60){
//             estudandes.approved = 'aprovado';
//         } else {
//             estudandes.approved = 'reprovado';
//         }
//     }
//   };
//   situacao();

// const situacao = students.forEach((estudante) => { 
//     if (estudante.grade >= 60){
//         estudante.approved = 'aprovado';
//     } else {
//         estudante.approved = 'reprovado';
//     }
// });
// console.log(students);

//-----------------------------------------------------------

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const tabuada = numbers.forEach((number, index) => {
//     console.log(`${index} * 2 = ${number * 2}`);
// });
// tabuada;

//-----------------------------------------------------------

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const maiusculo = names.forEach((nome) => {
//     console.log(`${nome} - ${nome.toUpperCase()}`);
// });
// maiusculo;

//-------------------------------------------------------------

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  const chamarCall = emailListInData.forEach((chama) => showEmailList(chama));

 











    