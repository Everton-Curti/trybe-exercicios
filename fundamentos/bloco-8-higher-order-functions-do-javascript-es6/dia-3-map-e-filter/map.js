// const persons = [
//     { firstName: 'Maria', lastName: 'Ferreira' },
//     { firstName: 'João', lastName: 'Silva' },
//     { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// for (let index = 0; index < persons.length; index += 1){
//     console.log(`${persons[index].firstName} ${persons[index].lastName}`);
// }

// const pessoas = persons.map((person) => {
//     return `${person.firstName} ${person.lastName}`
// });
// console.log(pessoas);

//---------------------------------------------------------

// let listaNumeros = [10, 20, 30, 40];

// let dobrarNumeros = listaNumeros.map((lista) => lista * 2);

// console.log(dobrarNumeros);

//---------------------------------------------------------

// const numbers = [1, 2, 3, 4, -5];

// let negativar = numbers.map((number) => number > 0 ? number * -1 : number);

// console.log(negativar);

//----------------------------------------------------------

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);