'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _foo = require('./foo');

console.log(_foo.counter);

(0, _foo.updateCounter)();

console.log(_foo.counter);

// throw error: SyntaxError: src/index.js: "counter" is read-only
// counter = 7;

exports.default = 5;