'use strict'; const log = console.log; (async ()=>{

// object literals
const o1 = { a: 1, b: 1, c: 1 };
const o2 = {       b: 2, c: 2 };
const o3 = {             c: 3 };
const o4 = {};

const obj =
  Object.assign(      // no spread operation
    o4, o1, o3, o2);

log(obj);
log(obj === o4);

// { a: 1, b: 2, c: 2 }
// true

})();
