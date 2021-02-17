const x = ['a', 'b', 'c', 'a', 'b', 'a'];

const frequencyCounter =
  x.reduce(
    (a, e) =>
      a.set(e, 1 + (a.get(e) || 0)),
    new Map());

frequencyCounter.forEach(
  (v, k) =>
    console.log(`${k}: ${v}`)
);

// a: 3
// b: 2
// c: 1
