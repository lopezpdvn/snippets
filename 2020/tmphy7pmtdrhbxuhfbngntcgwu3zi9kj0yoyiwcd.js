'use strict'; const log = console.log; (async ()=>{

// Cartesian product of array of arrays

const cartesianProd = arrs => {
  if(!arrs || !arrs.length || arrs.some(a => !a))
    throw new Error('invalid input');

  if(arrs.length < 2 || arrs.some(a => !a.length))
    return [];

  let A = [[]];
  for(const a of arrs) {
    const _A = A;
    A = new Array(_A.length * a.length);

    let i = 0;
    for(const tuple of _A)
      for(const e of a)
        A[i++] = tuple.concat(e);
  }

  return A;
};

const x = [[1,2], ['A'], ['x', 'y', 'z']],
      y = cartesianProd(x);

for(const tuple of y)
  log(tuple);

})();
