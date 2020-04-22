'use strict'; const log = console.log; (async ()=>{

const take = function* (gen, k) {
  for(const e of gen()) {
    if(!k--)
      return
    yield e;
  }
};

const x = function*() {
  yield* [0, 2, 4, 6, 8];
};

new Array(8)
  .fill(undefined)
  .forEach(
    (_, i) => log([...take(x, i)]));

// []
// [ 0 ]
// [ 0, 2 ]
// [ 0, 2, 4 ]
// [ 0, 2, 4, 6 ]
// [ 0, 2, 4, 6, 8 ]
// [ 0, 2, 4, 6, 8 ]
// [ 0, 2, 4, 6, 8 ]

})();
