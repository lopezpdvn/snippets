---
layout: page
title: Note
permalink: /note/
---

`isSubtree`

{% highlight javascript %}
const isSubtree = (s, t) =>
  s !== null && (equals(s, t)          ||
                 isSubtree(s.left , t) ||
                 isSubtree(s.right, t));

const equals = (x, y) => {
  if(!x && !y) return true;
  if(!x || !y) return false;
  return x.val === y.val          &&
         equals(x.left , y.left ) &&
         equals(x.right, y.right);
};
{% endhighlight %}

### Complexity analysis

- Time complexity : `O(m*n)`. In worst case (skewed tree) `isSubtree` function.
- Space complexity : `O(n)`. The depth of the recursion tree can go upto `n`.
  `n` refers to the number of nodes in `s`.
