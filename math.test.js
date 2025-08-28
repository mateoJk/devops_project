const { suma, resta } = require('./math'); // importa desde math.js

console.assert(suma(2, 3) === 5, 'Test fallido: 2 + 3 !== 5');
console.assert(resta(5, 2) === 3, 'Test fallido: 5 - 2 !== 3');

console.log('Tests ejecutados correctamente');
