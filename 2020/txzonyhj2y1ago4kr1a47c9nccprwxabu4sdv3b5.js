'use strict'; const log =console.log; (async ()=>{

const append =
  (e, arr = []) =>
    (arr.push(e), arr);
    
log(append(1));
log(append(2));
log(append(3));

// [ 1 ]
// [ 2 ]
// [ 3 ]

})();