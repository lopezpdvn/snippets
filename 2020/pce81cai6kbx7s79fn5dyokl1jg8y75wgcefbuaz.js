'use strict'; const log = console.log; (async ()=>{

/* Let nums be array of n ints (n > 1). Map to
 * array out where out[i] is the product of all
 * elements in nums except nums[i] */
const productExceptSelf = nums => {
  const multiplicative_identity = 1,
        n      = nums.length,
        answer = new Array(n).fill(Number());

  answer[0] = multiplicative_identity;
  for(let i = 1; i < n; i++)
    answer[i] = nums[i - 1] * answer[i - 1];

  let R = multiplicative_identity;
  for(let i = n - 1; i >= 0; i--) {
    answer[i] *= R;
    R *= nums[i];
  }

  return answer;
};

// Space complexity < O(2n) ~= O(n)

// Example:
// [1,2,3,4] -> [24,12,8,6]

})();
