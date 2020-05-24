'use strict'; const log = console.log; (async ()=>{

// sum of digits of base-10 integer

const f = x => {
  x = Math.trunc(Math.abs(x));
  let sum = 0;

  while(x > 0) {
    sum += x % 10;
    x = Math.trunc(x / 10);
  }

  return sum;
};

const X = [12.2, 0, 9202, -9202];
X.forEach(x => log(f(x)));

// 3
// 0
// 13
// 13

})();
