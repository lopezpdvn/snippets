'use strict'; const log = console.log; (async ()=>{

const x = new Array(3);
log(x.length);

for(const i of x.keys())
  log(`${x[i] === undefined}`);

})();
