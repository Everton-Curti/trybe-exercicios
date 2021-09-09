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
