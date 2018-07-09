console.log('foo: step 1');

exports.foo1 = 'foo1';

const bar = require('./bar');

console.log('foo: step 2', bar);

exports.foo2 = 'foo2';
