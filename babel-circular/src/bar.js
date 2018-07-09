console.log('bar: step 1');

import { foo1, foo2 } from './foo';

export default 5;

console.log('bar: step 2', foo1, foo2);

(async () => {

    await 0;

    console.log('bar: step 2', foo1, foo2);

})();