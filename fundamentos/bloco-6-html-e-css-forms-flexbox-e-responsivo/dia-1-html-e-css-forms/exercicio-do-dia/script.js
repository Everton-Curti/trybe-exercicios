let capturarSelect = document.querySelector('#estado');
let arrayEstados = ['', 'AM', 'RJ', 'SP', 'MG', 'ES', 'AP', 'AC'];
for (let index = 0; index < arrayEstados.length; index += 1){
    let createOptions = document.createElement('option');
    createOptions.innerHTML = arrayEstados[index];
    capturarSelect.appendChild(createOptions);
}



