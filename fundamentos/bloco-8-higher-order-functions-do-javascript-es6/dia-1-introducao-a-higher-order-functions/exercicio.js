const despertador = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Prtiu Dormir!!';

const all = (callback) => {
    const result = callback();
    console.log(result);
}

all(despertador);
all(cafe);
all(dormir);