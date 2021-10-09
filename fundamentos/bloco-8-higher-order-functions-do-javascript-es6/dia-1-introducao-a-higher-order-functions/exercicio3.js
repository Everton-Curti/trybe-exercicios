const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

let hof = (arrayRespostaCorreta, arrayVerificar, funcao) => {
    let contador = 0;

    for (let index = 0; index < arrayRespostaCorreta.length; index += 1){
        const funcaoRetorno = funcao(arrayRespostaCorreta[index], arrayVerificar[index]);
        contador += funcaoRetorno;
    }
    return `Pontuou: ${contador}`;       
};

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, (correta, verificar) => {
    if (correta === verificar){
        return 1;
    } if (verificar === 'N.A'){
        return 0;
    }
    return -0.5;    
}));