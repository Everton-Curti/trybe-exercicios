function verificaPalindrome(palavra){
  let palavraInvertida = palavra.split('').reverse().join('');
  if (palavra === palavraInvertida){
      return true;
  }else {
      return false;
  }
}

let validacao = verificaPalindrome('ara');
console.log(validacao);

