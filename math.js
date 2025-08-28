const { suma, resta } = require('./math');

console.assert(suma(2, 3) === 5, 'Test fallido: 2 + 3 !== 5');
console.assert(resta(5, 3) === 2, 'Test fallido: 5 - 3 !== 2');

console.log('Test successfully');
