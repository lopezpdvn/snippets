'use strict'; const log = console.log; (async ()=>{

/* Generate pows of 2 from 1 to n inclusive.
 * Time complexity O(log(n)) */

const f = function* g(n) {
  if(n < 1) return;
  if(n === 1) {
    yield 1;
    return;
  }
  let x;
  for(x of g(Math.trunc(n / 2)))
    yield x;

  yield 2 * x;
};

log(...f(-2));
log(...f(0));
log(...f(1));
log(...f(2));
log(...f(4));
log(...f(5));
log(...f(7));
log(...f(8));

// 
// 
// 1
// 1 2
// 1 2 4
// 1 2 4
// 1 2 4
// 1 2 4 8

})();
