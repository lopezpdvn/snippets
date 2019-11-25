'use strict'; const log = console.log; (async ()=>{

const x = [...'abcd'];

const y = Array.isArray(
            x.keys());

log(y);

// Output
// false

})();
