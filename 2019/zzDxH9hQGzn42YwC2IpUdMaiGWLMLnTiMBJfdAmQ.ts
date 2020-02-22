'use strict'; const log =console.log; (async ()=>{

const identity: {<T>(arg: T): T} = x => x;

log(identity('abc'));
log(identity(4));

})();