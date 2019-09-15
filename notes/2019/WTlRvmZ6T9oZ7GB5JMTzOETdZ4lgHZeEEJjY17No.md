---
layout: page
title: Note
permalink: /note/
---

Given two binary trees, write a function to check if they are the same
or not.

Two binary trees are considered the same if they are structurally
identical and the nodes have the same value.

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const isSameTree = function f(p, q) {
  if(!p && !q)
    return true;
  if(!p || !q)
    return false;
  if(p.val !== q.val)
    return false;
  return f(p.right, q.right) &&
         f(p.left , q.left);
};

})();
{% endhighlight %}

## Complexity Analysis

- Time complexity: O(n) where n is a number of nodes in the tree, since
  one visits each node exactly once.

- Space complexity: O(logn) in the best case of completely balanced tree
  and O(n) in the worst case of completely unbalanced tree, to keep a
  recursion stack.
