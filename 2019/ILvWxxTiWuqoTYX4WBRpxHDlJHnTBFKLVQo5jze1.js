'use strict'; const log = console.log; (async ()=>{

const x = new Array(3);
log(x.length);

x.forEach(e =>
  log(`forEach: ${e === undefined}`));

})();
