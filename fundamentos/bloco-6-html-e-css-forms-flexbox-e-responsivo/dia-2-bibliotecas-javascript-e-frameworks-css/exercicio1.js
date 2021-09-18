let moment = require('moment');

let brasilTetra = moment('17041994', 'DDMMYYYY');
let fromNow = brasilTetra.fromNow();

console.log('O É tetra foi há ' + fromNow);

