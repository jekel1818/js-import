import { increaseCounter, counter } from './bar';
import './style.css';
import * as _ from 'lodash';

console.log(_.get);

// Test the binding semantics
console.log(counter);
increaseCounter();
console.log(counter);

