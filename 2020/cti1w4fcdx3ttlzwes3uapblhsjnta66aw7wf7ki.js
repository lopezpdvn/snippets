'use strict'; const log = console.log; (async ()=>{

const f = n => _g(n, 1, n);

const _g = function g(n, min, max) {
  if(min > max) return null;

  const mid = min + Math.trunc((max - min) / 2),
    midSqrd = mid ** 2;

  if(midSqrd < n)
    return g(n, mid + 1, max);
  else if(midSqrd > n)
    return g(n, min, mid - 1);
  return mid;
};

const eq = require('assert').strictEqual;
eq(f(2), null);
eq(f(4), 2);
eq(f(8), null);
eq(f(9), 3);

})();
