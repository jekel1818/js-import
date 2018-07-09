"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateCounter = updateCounter;
// throw error: ReferenceError: a is not defined
//a = 6;

var counter = exports.counter = 0;

function updateCounter() {
    exports.counter = counter += 1;
}