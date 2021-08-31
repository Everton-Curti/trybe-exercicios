let names = {
    person1: 'Joao',
    person2: 'Maria',
    person3: 'jorge'
};

for (let index in names){
    console.log('Olá ' + names[index]);
}

let car = {
    model: 'A3 Sedan',
    manuFacturer: 'Audi',
    year: 2020
};

for (let index in car){
    console.log(index + ': ', car[index]);
}