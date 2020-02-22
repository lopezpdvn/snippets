'use strict'; const log = console.log; (async ()=>{

const x = [3, 9, 6];
log(x.pop());
log(x.shift());
log(x.pop());
log(x.shift());
log(x.pop());

/* Output
   6
   3
   9
   undefined
   undefined
*/

})();
