'use strict'; const log = console.log; (async ()=>{

const x = { prop: 42 };

const y = Object.freeze(x);

log(x === y);

// true

})();