'use strict'; const log = console.log; (async ()=>{

/* A robot is located at the top-left corner of a
 * m x n grid. It can only move either down or
 * right at any point in time. The robot is trying
 * to reach the bottom-right corner of the grid.
 *
 * How many possible unique paths are there?
 *
 * Example 0: m = 2, n = 3 -> 3
 * 1. Right -> Right -> Down
 * 2. Right -> Down  -> Right
 * 3. Down  -> Right -> Right
 *
 * Example 1: m = 3, n = 7 -> 28 */

const uniquePaths = (m, n) => {
  const d = new Array(m).fill(undefined);
  d.forEach(
    (_, i, A) => A[i] = new Array(n).fill(1));

  for(let i = 1; i < m; i++)
    for(let j = 1; j < n; j++)
      d[i][j] = d[i - 1][j] + d[i][j - 1];

  return d[m - 1][n - 1];
};

})();
