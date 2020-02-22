'use strict'; const log = console.log; (async ()=>{

const x = ['b', [Symbol()], 4];

const y = x.concat('a');

log(x);
log(y);

// [ 'b', [ Symbol() ], 4 ]
// [ 'b', [ Symbol() ], 4, 'a' ]

})();
