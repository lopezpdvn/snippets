'use strict'; const log = console.log; (async ()=>{

/* Let A be asc sorted [Double] rotated at unknown
 * pivot. Get index of arg target or -1 if absent.
 *
 * f :: [Double] -> Double -> Int */
const search = (A, target) => {
  let l = 0, h = A.length - 1;

  while(l <= h) {
    const m = l + Math.trunc((h - l) / 2);
    if(A[m] === target)
      return m;

    if(A[l] <= A[m])
      if(A[l] <= target && target < A[m])
        h = m - 1;
      else
        l = m + 1;
    else
      if(A[m] < target && target <= A[h])
        l = m + 1;
      else
        h = m - 1;
  };

  return -1;
};

// leetcode33

})();
