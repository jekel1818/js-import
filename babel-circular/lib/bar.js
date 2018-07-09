'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _foo = require('./foo');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

console.log('bar: step 1');

exports.default = 5;


console.log('bar: step 2', _foo.foo1, _foo.foo2);

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 0;

                case 2:

                    console.log('bar: step 2', _foo.foo1, _foo.foo2);

                case 3:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
}))();