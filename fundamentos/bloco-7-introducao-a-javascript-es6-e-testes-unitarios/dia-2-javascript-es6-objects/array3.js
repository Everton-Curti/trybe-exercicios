const citiesAndStates = [
    {
      city: 'Belo Horizonte',
      state: 'Minas Gerais',
    },
    {
      city: 'Salvador',
      state: 'Bahia',
    },
    {
      city: 'Porto Alegre',
      state: 'Rio Grande do Sul',
    },
    {
      city: 'Manaus',
      state: 'Amazonas',
    }
  ]

  const listaEstados = (array) => {
    let lista = Object.values(array);  
    for (let index in lista){
        console.log(lista[index]);
    }          
  }
  listaEstados(citiesAndStates);
