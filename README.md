# HashMap & HashSet Implementation in JavaScript

This project implements a custom `HashMap` and `HashSet` in JavaScript, mimicking the behavior of built-in hash maps.

## Features

### HashMap
- `set(key, value)`: Adds or updates a key-value pair.
- `get(key)`: Retrieves the value for a given key.
- `has(key)`: Checks if a key exists.
- `remove(key)`: Removes a key-value pair.
- `length()`: Returns the number of stored keys.
- `clear()`: Clears all entries.
- `keys()`: Returns all keys.
- `values()`: Returns all values.
- `entries()`: Returns all key-value pairs.

### HashSet
- `add(key)`: Adds a key.
- `has(key)`: Checks if a key exists.
- `remove(key)`: Removes a key.
- `clear()`: Clears all keys.
- `values()`: Returns all keys.
- `size()`: Returns the number of keys.

## Usage

1. Include `hashmap.js` and `main.js` in your project.
2. Run `main.js` to test the functionality of the HashMap.

## Example

```javascript
const test = new HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
console.log(test.get('apple')); // Output: red
```

## Illustration

The following image illustrates the internal structure of the HashMap:

![HashMap Illustration](jpeg.jfif)
