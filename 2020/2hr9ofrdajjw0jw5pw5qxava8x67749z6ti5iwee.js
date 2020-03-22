'use strict'; const log = console.log; (async ()=>{

/* An array w/ no dups sorted asc is rotated at
 * some unknown pivot. Find the min element. */
const findMin = A => {
  if(A.length === 1) return A[0];

  let L = 0, R = A.length - 1;

  if(A[0] < A[R]) return A[0];

  while(L <= R) {
    const mid = Math.trunc(L + (R - L) / 2);
    if(A[mid  ] > A[mid+1]) return A[mid+1];
    if(A[mid-1] > A[mid  ]) return A[mid]  ;

    if(A[0] < A[mid]) L = mid + 1;
    else              R = mid - 1;
  }
  return -1;
};

// Example 1: [3,4,5,1,2]     -> 1
// Example 2: [4,5,6,7,0,1,2] -> 0

})();
