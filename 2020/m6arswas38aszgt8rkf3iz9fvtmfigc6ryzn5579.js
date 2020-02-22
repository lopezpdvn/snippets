'use strict'; const log = console.log; (async ()=>{

const x =
  Object.freeze({
    prop: 42
  });

log(x);
x.prop++;
log(x);

// TypeError: Cannot assign to read only property
// 'prop' of object '#<Object>'

})();
