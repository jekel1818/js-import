console.log('bar: step 1');

const foo = require('./foo');

module.exports = 'bar';

console.log('bar: step 2', foo);