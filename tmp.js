'use strict'; const log = console.log; (async ()=>{

const resolvedProm = Promise.resolve(33);

const thenProm =
  resolvedProm.then(val =>
    (log(`asynchly called, val: ${val}`), val));

log(thenProm);

setTimeout(log, 0, thenProm);

})();
