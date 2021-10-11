const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  function formatedBookNames() {
    const transformarArray = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
    return transformarArray;
  }

  function nameAndAge() {
    return books.map((book) => (
        {
            age: book.releaseYear - book.author.birthYear,
            autor: book.author.name,
        }
    )).sort((a, b) => a.age - b.age);
  }

  function fantasyOrScienceFiction() {
    return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
  }

  function oldBooksOrdered() {
    const anoAtual = new Date().getFullYear();
    return books.filter((book) => (anoAtual - book.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear);
  }

  function fantasyOrScienceFictionAuthors() {
    return books.filter((book) =>  book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .map((book) => book.author.name)
    .sort();
  }

  function oldBooks() {
    const anoAtual = new Date().getFullYear();
    return books.filter((book) => (anoAtual - book.releaseYear) > 60).map((book) => book.name);
  }
  
  



 


  

  