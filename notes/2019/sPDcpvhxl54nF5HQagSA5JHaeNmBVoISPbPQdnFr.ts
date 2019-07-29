'use strict'; const log =console.log; (async ()=>{

const identity = <T>(arg: T) : T => arg;

log(identity('abc'));
log(identity(4));

})();