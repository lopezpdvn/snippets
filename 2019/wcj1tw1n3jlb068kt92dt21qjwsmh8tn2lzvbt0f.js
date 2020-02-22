'use strict'; const log = console.log; (async ()=>{

const climbStairs = n =>
  climbStairs_(0, n, new Array(n + 1)
                       .fill(Number()));

const climbStairs_ = function f(i, n, memo) {
  if(i > n)
    return 0;
  if(i === n)
    return 1;
  if(memo[i])
    return memo[i];

  memo[i] = f(i+1, n, memo) + f(i+2, n, memo);
  return memo[i];
}

})();
