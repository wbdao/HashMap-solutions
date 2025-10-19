
// const { HashMap } = require('./hashmap');
import { HashMap } from './hashmap.js';
const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Overwrite
test.set('apple', 'green');
test.set('banana', 'light yellow');

// Trigger resize
test.set('moon', 'silver');

console.log('apple:', test.get('apple'));
console.log('has lion:', test.has('lion'));
console.log('remove dog:', test.remove('dog'));
console.log('length:', test.length());
console.log('keys:', test.keys());
console.log('values:', test.values());
console.log('entries:', test.entries());

test.clear();
console.log('length after clear:', test.length());
