'use strict'; const log = console.log; (async ()=>{

// Given a sorted array of numbers, find out if a
// given number key is present in the array.

const binarySearchAgnostic = (A, x) => {
  let l = 0, h = A.length - 1;
  const asc = A[l] < A[h];

  while(l <= h) {
    const mid = l + Math.trunc((h - l) / 2);

    if(x === A[mid]) return mid;

    if(asc)
      if(x < A[mid]) h = mid - 1;
      else           l = mid + 1;
    else
      if(x > A[mid]) h = mid - 1;
      else           l = mid + 1;
  }

  return -1;
};

log(binarySearchAgnostic([4,6,10], 10));
log(binarySearchAgnostic([1,2,3,4,5,6,7], 5));
log(binarySearchAgnostic([10,6,4], 10));
log(binarySearchAgnostic([10,6,4], 4));

})();
