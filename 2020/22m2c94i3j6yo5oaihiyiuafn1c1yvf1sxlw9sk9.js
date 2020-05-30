'use strict'; const log = console.log; (async ()=>{

Given nonempty arr of non-negative ints, find
length of shortest subarr w/ same degree as arr

const f = A => {
  const left = new Map(), right = new Map(),
    mset = new Map();

  A.forEach((e, i) => {
    if(left.get(e) === undefined) left.set(e, i);
    right.set(e, i);
    mset.set(e, (mset.get(e) || 0) + 1); // count
  });

  const degree = Math.max(...mset.values());
  let ans = A.length;

  mset.forEach((count, e) => {
    if(count === degree) {
      ans = Math.min(ans,

        // length of subarr containing all e's
        right.get(e) - left.get(e) + 1);

    }
  });

  return ans;
};

})();
