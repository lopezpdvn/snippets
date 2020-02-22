'use strict'; const log =console.log; (async ()=>{

const subArrays = function* (x) {
  const n = x.length;
  for(let i = 0; i < n; i++)
    for(let j = i + 1; j <= n; j++)
      yield x.slice(i, j);
}

const x = 'abcd';
for(const e of subArrays(x)) log(e);

// a
// ab
// abc
// abcd
// b
// bc
// bcd
// c
// cd
// d

})();