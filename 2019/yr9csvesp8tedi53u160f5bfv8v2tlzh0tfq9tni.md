> Given a string `s` of length `n`, find the length of the longest substring without repeating characters.

Let time complexity `T < O(2n)`

```
const lengthOfLongestSubstring = s => {

  const n = s.length, map = new Map();
  let ans = 0;

  for(let j = 0, i = 0; j < n; j++) {
    const charAtJ = s.charAt(j);
    if(map.has(s.charAt(j)))
      i = Math.max(map.get(charAtJ), i);
    ans = Math.max(ans, j - i + 1);
    map.set(charAtJ, j + 1);
  }

  return ans;
};
```

