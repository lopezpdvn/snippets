'use strict'; const log =console.log; (async ()=>{

const f =
  (msg: string) : any =>
    { throw new Error(msg); }

f('hey');

})();