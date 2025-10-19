
class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.size = 0;
    this.buckets = Array(this.capacity).fill(null).map(() => []);
  }

  hash(key) {
    let hashCode = 0;
    const prime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const [k, v] of bucket) {
      if (k === key) return v;
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    const keys = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        keys.push(key);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (const bucket of this.buckets) {
      for (const [, value] of bucket) {
        values.push(value);
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        entries.push([key, value]);
      }
    }
    return entries;
  }
}

class HashSet {
  constructor() {
    this.map = new HashMap();
  }

  add(key) {
    this.map.set(key, true);
  }

  has(key) {
    return this.map.has(key);
  }

  remove(key) {
    return this.map.remove(key);
  }

  clear() {
    this.map.clear();
  }

  values() {
    return this.map.keys();
  }

  size() {
    return this.map.length();
  }
}

module.exports = { HashMap, HashSet };
