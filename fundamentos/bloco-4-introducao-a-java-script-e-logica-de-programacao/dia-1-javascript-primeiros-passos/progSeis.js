const peca = "rei";

switch(peca){
    case "peao":
        console.log ("Anda apenas uma casa a frente. Não pode andar para trás.");
        break;
    case "torre":
        console.log ("Anda em linha reta para todas as casas do tabuleiro.");
        break;
    case "bispo":
        console.log ("Anda nas diagonais para todas as casas do tabuleiro.");
        break;
    case "rainha":
        console.log ("Anda para todas as casas do tabuleiro.");
        break;
    case "rei":
        console.log ("Anda apenas uma casa para todas as casas do tabuleiro.");
        break;
    default:
        console.log("Não existe essa peça no xadrez!!");
}