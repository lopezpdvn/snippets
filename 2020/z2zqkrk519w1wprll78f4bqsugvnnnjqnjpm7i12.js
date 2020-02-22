'use strict'; const log = console.log; (async ()=>{

const factorial = function f(n) {

  if(n < 0)   throw new Error('wrong arg');

  return n ? n * f(n - 1) : 1;
};

new Array(11)
  .fill(undefined)
  .forEach(
    (e, i) =>
      log(`${i}! = ${factorial(i)}`));

// 0! = 1
// 1! = 1
// 2! = 2
// 3! = 6
// 4! = 24
// 5! = 120
// 6! = 720
// 7! = 5040
// 8! = 40320
// 9! = 362880
// 10! = 3628800

})();
