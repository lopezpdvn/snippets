// Given a string s of length n, find the length
// of the longest substring without repeating
// characters, time complexity < O(n^3)

const lengthOfLongestSubstring = s => {
  const n = s.length, set = new Set();
  let ans = 0, i = 0, j = 0;

  while(i < n && j < n) {
    if(!set.has(s.charAt(j))) {
      // extend sliding window range [i, j++)
      set.add(s.charAt(j++));
      ans = Math.max(ans, j - i);
    }
    else {
      set.delete(s.charAt(i++));
    }
  }

  return ans;
};
