'use strict'; const log = console.log; (async ()=>{

const x = [1, 2, 3];
log(x.unshift(4, 5, 6));
log(x);

/* Output
   6
   [ 4, 5, 6, 1, 2, 3 ]   
*/

})();
