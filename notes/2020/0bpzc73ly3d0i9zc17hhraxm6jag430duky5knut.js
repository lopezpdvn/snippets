'use strict'; const log = console.log; (async ()=>{

const x = { foo: 'bar', x: 42 };

const y = {...x};  // one line

const xEqualY =
  Object.keys(x)
    .map(   k => [x[k], y[k]] )
    .reduce(c => c[0] === c[1]);

log(x);
log(y);
log(x === y);
log(xEqualY);

// { foo: 'bar', x: 42 }
// { foo: 'bar', x: 42 }
// false
// true

})();