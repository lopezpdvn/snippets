'use strict'; const log = console.log; (async ()=>{

// Let A & B each be a pairwise disjoint sorted
// list of closed intervals. Return the
// intersection of A & B

const intervalIntersection = (A, B) => {
  const ans = [];
  let a = b = 0;

  while(a < A.length && b < B.length) {
    const intrsctnL = Math.max(A[a][0], B[b][0]);
    const intrsctnH = Math.min(A[a][1], B[b][1]);

    if(intrsctnL <= intrsctnH)
      ans.push([intrsctnL, intrsctnH]);

    if(A[a][1] < B[b][1]) a++;
    else                  b++;
  }

  return ans;
};

// Example
// A = [[0,2],[5,10],[13,23],[24,25]],
// B = [[1,5],[8,12],[15,24],[25,26]]
// [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

// Time complexity: O(A.length + B.length)

})();
