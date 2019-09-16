---
layout: page
title: Note
permalink: /note/
---

Lowest common ancestor (LCA) of 2 nodes in a binary search tree (BST).

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const lowestCommonAncestor =
                          function f(root, p, q) {
  const rootVal = root.val,
        pVal    = p.val,
        qVal    = q.val;
  if(rootVal < pVal && rootVal < qVal)
    return f(root.right, p, q);
  else if(pVal < rootVal && qVal < rootVal)
    return f(root.left, p, q);
  else
    return root;
};

})();
{% endhighlight %}

## Complexity Analysis

- Time Complexity: O(N) worst case, where N is the number of nodes in
  the BST.  In the worst case we might be visiting all the nodes of the
  BST.

- Space Complexity: Average O(logN), worst O(N). This is because the
  maximum amount of space utilized by the recursion stack would be N
  since the height of a skewed BST could be N.
