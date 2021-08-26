const anguloUm = 60;
const anguloDois = 60;
const anguloTres = -60;

let somaAngulo = anguloUm + anguloDois + anguloTres;


if (anguloUm > 0 && anguloDois > 0 && anguloTres > 0){
    if (somaAngulo == 180){
        console.log(true);
    } else {
        console.log(false);
    }
}else{
    console.log("Erro!! Um dos angulos é negativo");
}