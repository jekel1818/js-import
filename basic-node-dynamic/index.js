(async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const foo = require('./foo'); // blocking call!

    console.log(foo);

})();