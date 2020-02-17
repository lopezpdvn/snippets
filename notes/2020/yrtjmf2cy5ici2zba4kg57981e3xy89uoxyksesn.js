'use strict'; const log = console.log; (async ()=>{

const x = [0, null, undefined];

// Does x have at least one element?
const isXNotEmpty =
  x.some(
    e =>
      e || !e);

log(isXNotEmpty);

// true

})();
