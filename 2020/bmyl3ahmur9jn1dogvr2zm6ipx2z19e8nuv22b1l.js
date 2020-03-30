'use strict'; const log = console.log; (async ()=>{

const maxArea = height => {
  let maxArea = 0, l = 0, r = height.length - 1;

  while(l < r) {
    maxArea = Math.max(
      maxArea, Math.min(height[l], height[r]) *
               (r -l));
    if(height[l] < height[r])
      l++;
    else
      r--;
  }
  return maxArea;
};

// Example:
// [1,8,6,2,5,4,8,3,7] -> 49

// Time complexity: O(n) where n is height.length

})();
