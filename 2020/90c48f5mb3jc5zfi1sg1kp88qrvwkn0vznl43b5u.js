'use strict'; const log = console.log; (async ()=>{

/* You climb a stair case of n steps total, 1 or 2
steps at a time. Enumerate all distinct ways you
can climb to the top.

Ex0: 0 -> []
Ex1: 1 -> [1]
Ex2: 2 -> [1, 1], [2]
Ex3: 3 -> [1, 1, 1], [1, 2], [2, 1]
Ex4: 4 -> [1, 1, 1, 1], [1, 1, 2], [1, 2, 1],
                        [2, 1, 1], [2, 2]       */

const climbStairs = function* f(n) {
  if(n < 0) return;
  if(!n) {
    yield [];
    return;
  }
  if(n === 1) {
    yield [1];
    return;
  }

  for(const e of f(n-1))
    yield [1].concat(e);

  for(const e of f(n-2))
    yield [2].concat(e);
};

const testIn = [0, 1, 2, 3, 4, 5];

for(const x of testIn)
  log([...climbStairs(x)]);

/*
[ [] ]
[ [ 1 ] ]
[ [ 1, 1 ], [ 2 ] ]
[ [ 1, 1, 1 ], [ 1, 2 ], [ 2, 1 ] ]
[
  [ 1, 1, 1, 1 ],
  [ 1, 1, 2 ],
  [ 1, 2, 1 ],
  [ 2, 1, 1 ],
  [ 2, 2 ]
]
[
  [ 1, 1, 1, 1, 1 ],
  [ 1, 1, 1, 2 ],
  [ 1, 1, 2, 1 ],
  [ 1, 2, 1, 1 ],
  [ 1, 2, 2 ],
  [ 2, 1, 1, 1 ],
  [ 2, 1, 2 ],
  [ 2, 2, 1 ]
] */

})();
