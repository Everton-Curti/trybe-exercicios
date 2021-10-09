const newEmployees = (nomeCompleto) => {
    const employees = {
      id1: nomeCompleto('Pedro Guerra'),
      id2: nomeCompleto('Luiza Drumond'), 
      id3: nomeCompleto('Carla Paiva'),
    }
    return employees;
  };

  const empregados = (nome) => {
      let email = nome.toLowerCase().split(' ').join('_');
      return {nome, email: `${email}@trybe.com`};     
  }

  console.log(newEmployees(empregados));



