function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    }
  }  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function configurarDias(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let capturarUl = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index +=1){
      let dias = dezDaysList[index];
      let criarLi = document.createElement('li');

      if (dias === 24 || dias === 25 || dias == 31){
        criarLi.className = 'day holiday';
        criarLi.innerHTML = dias;
        capturarUl.appendChild(criarLi);
      } else if (dias === 4 || dias === 11 || dias === 18 || dias === 25){
        criarLi.className = 'day friday';
        criarLi.innerHTML = dias;
        capturarUl.appendChild(criarLi);
      } else {
        criarLi.className = 'day';
        criarLi.innerHTML = dias;
        capturarUl.appendChild(criarLi);
      }     
    }
  }
  configurarDias();

function configurarBotaoFeriados(feriados){
    let capturarDivBotao = document.querySelector('.buttons-container');
    let criarBotao = document.createElement('button');
    let criarBotaoId = 'btn-holiday';
    
    criarBotao.innerHTML = 'Feriados';
    criarBotao.id = criarBotaoId;
    capturarDivBotao.appendChild(criarBotao);
}
configurarBotaoFeriados();

function changeHoliday(){
  let capturaBotao = document.querySelector('#btn-holiday');
  let capturaClassHoliday = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let novaCor = 'white';
  
  capturaBotao.addEventListener('click', function(){
    for(let index = 0; index < capturaClassHoliday.length; index += 1){
      if (capturaClassHoliday[index].backgroundColor === novaCor){
        capturaClassHoliday[index].style.backgroundColor = backgroundColor;
      } else {
        capturaClassHoliday[index].style.backgroundColor = novaCor;
      }
    }
  })
}
changeHoliday();

function configurarBotaoSextaFeira(sextaFeira){
  let capturarDivPai = document.querySelector('.buttons-container')
  let criarBotaoSextaFeira = document.createElement('button');
  criarBotaoSextaFeira.id = 'btn-friday';
  criarBotaoSextaFeira.innerHTML = 'Sexta-Feira';
  capturarDivPai.appendChild(criarBotaoSextaFeira);
}
configurarBotaoSextaFeira();

function changeFriday(){
  let capturaBotaoSextaFeira = document.querySelector('#btn-friday');
  let capturaClasseSextaFeira = document.querySelectorAll('.friday');
  let novoTexto = 'SEXTOU o/';
  document.addEventListener('click', function(){
    for (let index = 0; index < capturaClasseSextaFeira.length; index += 1){
      if (capturaClasseSextaFeira[index].innerHTML !== novoTexto){
        capturaClasseSextaFeira[index].innerHTML = novoTexto;
      } else {
        capturaClasseSextaFeira[index].innerHTML = capturaClasseSextaFeira[index];
      }
    }
  })
}
changeFriday();
