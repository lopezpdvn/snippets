'use strict'; const log = console.log; (async ()=>{

const obj = {
  a: 'somestring',
  b: 42
};

Object.entries(obj)
      .forEach(
        ([k, v]) =>
          log(`${k}: ${v}`));

})();
