let salarioBruto = 5000;
let salarioLiquido;
let inss;
let impostoDeRenda;

//CALCULADO INSS
if (salarioBruto <= 1556.94){
    inss = (salarioBruto * 8)/100;
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = (salarioBruto * 9)/100;
}else if (salarioBruto >= 2595.93 && salarioBruto <= 5189.82){
    inss = (salarioBruto * 11)/100;
}else{
    inss = 570.88;
}

let salarioBase = salarioBruto - inss;

//CALCULANDO IMPOSTO DE RENDA
if (salarioBase <= 1903.98){
    impostoDeRenda = 0;
}else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    impostoDeRenda = ((salarioBase * 7.5)/100) - 142.80;
}else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    impostoDeRenda = ((salarioBase * 15)/100) - 354.80;
}else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    impostoDeRenda = ((salarioBase * 22.5)/100) - 636.16;
}else{
    impostoDeRenda = ((salarioBase * 27.5)/100) - 869.36;
}

salarioLiquido = salarioBase - impostoDeRenda;


console.log("------------FOLHA DE PAGAMENTO!!------------");
console.log();
console.log("+++CREDITOS!!+++");
console.log("SALARIO BRUTO : " + salarioBruto.toFixed(2));
console.log();
console.log("---DEBITOS!!---");
console.log("INSS : " + inss.toFixed(2));
console.log("IMPOSTO DE RENDA : " + impostoDeRenda.toFixed(2));
console.log();
console.log("SALARIO LIQUIDO: " + salarioLiquido.toFixed(2));




