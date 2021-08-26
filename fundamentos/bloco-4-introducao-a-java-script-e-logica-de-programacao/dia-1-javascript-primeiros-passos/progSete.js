const nota = 55;
const percentagem = nota * (nota/100); 

if (nota >= 90 && nota <= 100){
    console.log (percentagem);
} else if (nota >= 80 && nota < 90){
    console.log(percentagem);
} else if (nota >= 70 && nota < 80){
    console.log(percentagem);
} else if (nota >= 60 && nota < 70){
    console.log(percentagem);
} else if (nota >= 50 && nota < 60){
    console.log(percentagem);
}else{
    console.log("ERRO!!! Notas validas de 0 a 100.");
}