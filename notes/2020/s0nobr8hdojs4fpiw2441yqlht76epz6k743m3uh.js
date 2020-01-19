'use strict'; const log = console.log; (async ()=>{

const x = [1, 30, 4, 21, 1000];

x.sort();

log(x);

// [1, 100000, 21, 30, 4]

})();
