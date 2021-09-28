const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  let adicionarTurnoNoite = (obj, chave, valor) => {
      obj[chave] = valor;
  }
  adicionarTurnoNoite(lesson2, 'turno', 'noite');
  // console.log(lesson2);

  // const listarChaves = obj => Object.keys(obj);
  // console.log(listarChaves(lesson3));

  // const tamanhoObjeto = obj => Object.keys(obj).length;
  // console.log(tamanhoObjeto(lesson1));

  // const listarValores = obj => Object.values(obj);
  // console.log(listarValores(lesson3));
  
  //const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  //console.log(allLessons);

  // const totalEstudantes = obj => {
  //   let total = 0;
  //   const array = Object.keys(obj);
  //   for (index in array){
  //     total += obj[array[index]].numeroEstudantes;
  //   }
  //   return total;
  // }
  // console.log(totalEstudantes(allLessons));

  const listarPosicao = (obj, posicao) => Object.values(obj)[posicao];
  console.log(listarPosicao(lesson3, 2));




  



  
