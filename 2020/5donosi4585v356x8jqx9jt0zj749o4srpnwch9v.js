'use strict'; const log = console.log; (async ()=>{

// f : [Int] -> max sum of non-empty subarray
// Ex: [-2, 1, -3, 4, -1, 2, 1, -5, 4] -> 6
//                [           ]

const f = nums => {
  let currSum = -Infinity, maxSum = currSum;

  nums.forEach(num => {
    currSum = Math.max(num, currSum + num);
    maxSum = Math.max(maxSum, currSum);
  });

  return maxSum;
};

// Time complexity : O(n)
// Space complexity: O(1)

const x = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
log(f(x));

})();
