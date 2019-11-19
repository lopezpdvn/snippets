'use strict'; const log = console.log; (async ()=>{

const x = 'abcd', n = x.length;

// Enumerate the 2-combinations of x by iterating
// indeces.

for(let i = 0; i < n; i++)
  for(let j = 0; j < i; j++)
    log(`${x[i]}, ${x[j]}`);
log();
for(let i = 0; i < n; i++)
  for(let j = i + 1; j < n; j++)
    log(`${x[i]}, ${x[j]}`);

// b, a
// c, a
// c, b
// d, a
// d, b
// d, c

// a, b
// a, c
// a, d
// b, c
// b, d
// c, d

})();
