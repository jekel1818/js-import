'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo2 = exports.foo1 = undefined;

var _bar = require('./bar');

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('foo: step 1');

var foo1 = exports.foo1 = 5;

var foo2 = exports.foo2 = 6;

console.log('foo: step 2:', _bar2.default);