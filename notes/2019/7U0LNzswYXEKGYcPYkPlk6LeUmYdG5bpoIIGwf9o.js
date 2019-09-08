'use strict'; const log = console.log; (async ()=>{

const x = new Array(3);
log(x.length);

for(const [i, e] of x.entries())
  log(`${e    === undefined &&
         x[i] === undefined}`);

})();
