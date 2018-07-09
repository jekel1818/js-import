import { counter, updateCounter } from './foo';

console.log(counter);

updateCounter();

console.log(counter);

// throw error: SyntaxError: src/index.js: "counter" is read-only
// counter = 7;

export default 5;