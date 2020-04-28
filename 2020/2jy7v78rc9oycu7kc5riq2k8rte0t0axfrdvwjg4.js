'use strict'; const log = console.log; (async ()=>{

// Let input arr nums, where nums[i] ≠ nums[i+1],
// find any peak element and return its index.
// Consider nums[-1] = nums[n] = -∞.

// Example 0: [1, 2, 3, 1]          -> 2
// Example 1: [1, 2, 1, 3, 5, 6, 4] -> 1 or 5

const findPeakElement = nums => {
  let l = 0, r = nums.length - 1;

  while(l < r) {
    const mid = l + Math.trunc((r - l) / 2);
    if(nums[mid] > nums[mid + 1])
      r = mid;
    else
      l = mid + 1;
  }
  return l;
};

})();
