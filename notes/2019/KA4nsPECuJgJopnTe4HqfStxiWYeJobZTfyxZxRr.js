'use strict'; const log = console.log; (async ()=>{

const x = new Map(
  [[2, 'two'], [1, 'one'], [3, 'three']]);

x.keys().forEach(x => log(x));

})();
