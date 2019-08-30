'use strict'; const log = console.log; (async ()=>{

const x = [];
x.push('2');
x.push('3');
x.splice(0, 0, '0');
x.splice(1, 0, '1');
x.splice(4, 0, '4', '5');
log(x);

log(x[2]);
log(x[4]);
log(x[99]); // undefined

log(x.splice(2, 1)[0]); // '2'
log(x.splice(3, 1)[0]); // '4'

log(x.indexOf('9')); // -1
log(x.indexOf('1')); // 1

})();
