'use strict'; const log = console.log; (async ()=>{

/* You are climbing a stair case. It takes n steps
to reach to the top.  Each time you can either
climb 1 or 2 steps. Enumerate all distinct ways
you can climb to the top. */
const climbStairs = function* f(n) {
  if(n < 0) return;
  if(!n) {
    yield [];
    return;
  }
  if(n === 1) {
    yield [1];
    return;
  }

  for(const e of f(n-1))
    yield [1].concat(e);

  for(const e of f(n-2))
    yield [2].concat(e);
};

const testIn = [0, 1, 2, 3, 4, 5];

for(const x of testIn)
  log([...climbStairs(x)]);

})();
