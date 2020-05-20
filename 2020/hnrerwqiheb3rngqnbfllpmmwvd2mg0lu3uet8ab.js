'use strict'; const log = console.log; (async ()=>{

// Given [Int], return indices of the 2 Ints such
// that they add up to a specific target. Assume
// exactly 1 solution, & you may not use the same
// element twice. Time complexity: < O(n^2)

const twoSum = (nums, target) => {
  const num2Index = new Map();

  for(const [i, num] of nums.entries()) {
    const complement = target - num,
          index      = num2Index.get(complement);

    if(index !== undefined)
      return [index, i];

    num2Index.set(num, i);
  }
};

})();
