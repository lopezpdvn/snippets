'use strict'; const log = console.log; (async ()=>{

const x = new Array(3);
log(x.length);

for(let i = 0; i < x.length; i++)
  log(`${x[i] === undefined}`);

})();
