'use strict'; const log =console.log; (async ()=>{

interface SearchFunc {
  (str0: string, str1: string): boolean;
}

const myCompare : SearchFunc =
  (a, b) => a < b;

log(myCompare('a', 'b'));

})();