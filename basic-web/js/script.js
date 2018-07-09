foo = 'foo';
var bar = 'bar';
const dum = 'dum';

// Changing the top scope
function test() {

    funcFoo = 'funcFoo';
    var funcBar = 'funcBar';
    const funcDum = 'funcDum';

}


//IIFE
(function test2(){

    iifeFoo = 'funcFoo';
    var iifecBar = 'funcBar';
    const iifeDum = 'funcDum';

})();