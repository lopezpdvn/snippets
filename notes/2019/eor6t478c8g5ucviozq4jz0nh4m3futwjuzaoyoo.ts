'use strict'; const log =console.log; (async ()=>{

const propRet =
  <T, K extends keyof T>
    (obj: T, key: K): T[K] =>
      obj[key];

})();