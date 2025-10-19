
# HashMap & HashSet Implementation in JavaScript

This project implements a custom `HashMap` and `HashSet` in JavaScript, mimicking the behavior of native hash-based data structures. It includes full support for collision handling, dynamic resizing, and all standard operations.

## 📁 Files
- `hashmap.js`: Contains the implementation of `HashMap` and `HashSet` classes.
- `main.js`: Contains test cases and usage examples for the `HashMap` class.

## 🚀 Features
### HashMap
- `set(key, value)`: Adds or updates a key-value pair.
- `get(key)`: Retrieves the value for a given key.
- `has(key)`: Checks if a key exists.
- `remove(key)`: Deletes a key-value pair.
- `length()`: Returns the number of stored keys.
- `clear()`: Clears all entries.
- `keys()`: Returns an array of all keys.
- `values()`: Returns an array of all values.
- `entries()`: Returns an array of key-value pairs.

### HashSet
- `add(key)`: Adds a key.
- `has(key)`: Checks if a key exists.
- `remove(key)`: Deletes a key.
- `clear()`: Clears all keys.
- `values()`: Returns all keys.
- `size()`: Returns the number of keys.

## 🧪 Usage
```javascript
const { HashMap } = require('./hashmap');
const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
console.log(test.get('apple')); // Output: red
