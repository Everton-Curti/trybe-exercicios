const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
function flatten() {
    return arrays.reduce((acum, next) => acum.concat(next), []);       
}    
console.log(flatten());