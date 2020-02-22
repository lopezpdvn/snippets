'use strict'; const log = console.log; (async ()=>{

// Given an array of integers, return indices of
// the 2 numbers such that they add up to a
// specific target. Assume that each input would
// have exactly 1 solution, & you may not use the
// same element twice.

const twoSum = (nums, target) => {
  const n = nums.length;

  for(let i = 0; i < n; i++)
    for(let j = i + 1; j < n; j++)
      if(nums[j] === target - nums[i])
        return [i, j];

  throw new Error();
};

// Time: O(n2)
// Space: O(1)

})();
