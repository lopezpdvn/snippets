---
layout: page
title: Note
permalink: /note/
---

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you
climb to the top?

Code solution, top-down dynamic programming with memoization

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const climbStairs = n =>
  climbStairs_(0, n, new Array(n + 1)
                       .fill(Number()));

const climbStairs_ = function f(i, n, memo) {
  if(i > n)
    return 0;
  if(i === n)
    return 1;
  if(memo[i])
    return memo[i];

  memo[i] = f(i+1, n, memo) + f(i+2, n, memo);
  return memo[i];
}

})();
{% endhighlight %}

# Complexity Analysis

- Time complexity: O(n). Size of recursion tree can go upto n.
- Space complexity: O(n). The depth of recursion tree can go upto n.
