console.log('foo');

(async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Has to be top level!
    module.exports = 'foo';

})();