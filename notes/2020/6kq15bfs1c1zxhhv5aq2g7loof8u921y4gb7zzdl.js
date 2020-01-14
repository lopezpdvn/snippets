'use strict'; const log = console.log; (async ()=>{

const x = new Map([
  ['zero', 0],
  ['two' , 2]
]);

let y;

// 1 line
const z = y = x.get('zero');

log(y);
log(z);

// 0
// 0

})();
