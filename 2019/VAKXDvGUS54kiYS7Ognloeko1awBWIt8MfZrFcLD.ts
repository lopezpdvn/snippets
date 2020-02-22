'use strict'; const log =console.log; (async ()=>{

const f =
  (msg: string) : never =>
    { throw new Error(msg); }

f('hey');

})();