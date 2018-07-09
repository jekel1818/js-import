import 'babel-polyfill';

(async () => {

    await new Promise(resolve => setTimeout(resolve, 1000));

    // throw error: SyntaxError: src/index.js: 'import' and 'export' may only appear at the top level
    // import foo from './foo';

    // Still in proposal!
    const foo = await import('./foo');

    console.log(foo);


})();