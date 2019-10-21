---
layout: page
title: Note
permalink: /note/
---

Invert Binary Tree, inversion

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const invertTree = function f(root) {
  if(!root)
    return null;
  const right = f(root.right);
  const left = f(root.left);
  root.left = right;
  root.right = left;
  return root;
};

})();
{% endhighlight %}

# Complexity Analysis

- Time = O(n) worst. We cannot do better than that, since at the very least we
  have to visit each node to invert it.

- Space = O(n) worst. Linear to the height of tree, which in worst case is n
  (skewed tree).
