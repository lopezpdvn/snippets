'use strict'; const log = console.log; (async ()=>{

const x = { a: 1, b: 2, c: 3 };

const y = Object.fromEntries(
  Object.entries(x).map(
    ([ key, val ]) =>
    	[ key, val * 2 ])
);

log(y);

// { a: 2, b: 4, c: 6 }

})();
