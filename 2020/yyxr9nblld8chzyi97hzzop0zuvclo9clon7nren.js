'use strict'; const log = console.log; (async ()=>{

/* You are climbing a stair case. It takes n steps
 * to reach to the top.  Each time you can either
 * climb 1 or 2 steps. In how many distinct ways
 * can you climb to the top? */
const climbStairs = n => g(n, new Array(n+1));

const g = function f(n, a) {
  if(n < 0) return 0;
  if(!n)    return 1;
  if(!a[n])
    a[n] = f(n-1, a) + f(n-2, a);
  return a[n];
};

// Time complexity: O(n)

})();
