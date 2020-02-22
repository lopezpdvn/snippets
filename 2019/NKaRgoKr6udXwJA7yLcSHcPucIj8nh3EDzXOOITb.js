'use strict'; const log = console.log; (async ()=>{

// Array-like object
const a = {0: 1, 1: 2, 2: 3, length: 3};
log(a);

const a_key_types = Object.keys(a)
                          .map(x => typeof x);

log(a_key_types.length);
log();
a_key_types.forEach(e => log(e));

})();
