let situation = "aprovada";

switch(situation){
    case "aprovada":
        console.log("Parabéns, você foi aprovada!!");
        break;
    case "lista":
        console.log("Você foi para lista de espera!");
        break;
    case "reprovada":
        console.log("Você foi reprovada!");
        break;
    default:
        console.log("Não se aplica!!");
}