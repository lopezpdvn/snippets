'use strict'; const log = console.log; (async ()=>{

// Split/consume a generator into finite sequences
// of fixed length

const i = 3, j = 2,
  x = function*() {
    yield* [1, 3, 5, 7, 9, 11, 13, 15]
  };


const
  y = x(),

  left   = new Array(i).fill(undefined)
             .reduce(
               a => a.concat(y.next().value),
               []),

  middle = new Array(j).fill(undefined)
             .reduce(
               a => a.concat(y.next().value),
               []),

  right  = [...y];


log([left, middle, right]);
// [ [ 1, 3, 5 ], [ 7, 9 ], [ 11, 13, 15 ] ]

})();
