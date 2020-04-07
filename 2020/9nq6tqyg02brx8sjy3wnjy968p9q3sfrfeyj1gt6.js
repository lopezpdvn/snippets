'use strict'; const log = console.log; (async ()=>{

// Given arr nums containing n distinct numbers
// taken from 0, 1, 2, ..., n, find the missing.
const missingNumber = nums => {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  if(nums[n-1] !== n) return n;
  if(nums[0])         return 0;

  for(let i = 1; i < n; i++) {
    const expected = nums[i-1] + 1;
    if(nums[i] !== expected)
      return expected;
  }
};

// Example 1:
// [3,0,1] -> 2

// Example 2:
// [9,6,4,2,3,5,7,0,1] -> 8


})();
