'use strict'; const log = console.log; (async ()=>{

// val will be the same in every cell.
const buildMatrix = (m, n, val) => {
  const ans =
    new Array(m)
      .fill(undefined);

  ans.forEach(
    (_, i, A) =>
      A[i] = new Array(n).fill(val));

  return ans;
};

log(buildMatrix(3, 4, -2));
// [ [ -2, -2, -2, -2 ],
//   [ -2, -2, -2, -2 ],
//   [ -2, -2, -2, -2 ] ]

log(buildMatrix(4, 3, -2));
// [ [ -2, -2, -2 ],
//   [ -2, -2, -2 ],
//   [ -2, -2, -2 ],
//   [ -2, -2, -2 ] ]

})();
