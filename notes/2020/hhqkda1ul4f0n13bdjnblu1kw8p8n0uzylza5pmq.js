'use strict'; const log = console.log; (async ()=>{

const x = [1, 30, 4, 21, 1000];

x.sort(
  (a, b) =>
    a - b
);

log(x);

// [ 1, 4, 21, 30, 1000 ]

})();
