'use strict'; const log = console.log; (async ()=>{

let x, n = 8;

// Why does this...
x = new Array(n).fill(undefined);

// work and is the same as... ?
x = (new Array(n)).fill(undefined);

})();
