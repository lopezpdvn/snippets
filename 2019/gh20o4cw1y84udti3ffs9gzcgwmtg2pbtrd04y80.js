'use strict'; const log = console.log; (async ()=>{

const str = 'Ac0ab';

const sortedStr =
  Array.prototype.sort.call(str);

log(sortedStr);

})();
