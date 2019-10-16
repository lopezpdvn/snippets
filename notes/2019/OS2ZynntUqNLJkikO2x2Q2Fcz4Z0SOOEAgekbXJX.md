---
layout: page
title: Note
permalink: /note/
---

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you
climb to the top?

Code solution, brute force with recursion:

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const climbStairs = n => {
  if     (n < 0 )
    return 0;
  else if(n == 0)
    return 1;
  else
    return climbStairs(n-1) +
           climbStairs(n-2);
};

})();
{% endhighlight %}

## Complexity

- Time: O(2ⁿ)
- Space: O(n)
