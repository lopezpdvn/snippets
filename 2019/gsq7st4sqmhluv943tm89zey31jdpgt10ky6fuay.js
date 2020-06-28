'use strict'; const log =console.log; (async ()=>{

// Subarrays/substrings of argument
const subArrays = function* (x) {
  if(x === null || x === undefined)
    throw new Error();

  yield x.slice(0, 0);
  const n = x.length;

  for(let i = 0; i < n; i++)
    for(let j = i + 1; j <= n; j++)
      yield x.slice(i, j);
}

const x = 'abcd';
for(const e of subArrays(x)) log(e);

// (11 lines printed below)
//
// a
// ab
// abc
// abcd
// b
// bc
// bcd
// c
// cd

})();
