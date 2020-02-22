---
layout: page
title: Note
permalink: /note/
---

Explain Binary Search recursive algorithm

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

class SortedArray {
  static BinarySearchRecursive(a, x, n) {
    return SortedArray._BinarySearchRecursive(
                                  a, x, 0, n - 1);
  }
}

SortedArray._BinarySearchRecursive =
  function f(a, x, min, max) {
    if(min > max)
      return -1;
    const mid = Math.trunc((min + max) / 2);
    if(x < a[mid])
      return f(a, x, min, mid - 1);
    else if(a[mid] < x)
      return f(a, x, mid + 1, max);
    else
      return mid;
  }

const x = [-2, 0, 2, 3, 6, 9];
const g = SortedArray.BinarySearchRecursive;
log(g(x, -3, x.length));
log(g(x,  9, x.length));
log(g(x,  6, x.length));
log(g(x,  3, x.length));
log(g(x,  2, x.length));
log(g(x,  0, x.length));
log(g(x, -2, x.length));

})();
{% endhighlight %}

Output

```
-1
5
4
3
2
1
0
```
