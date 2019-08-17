---
layout: page
title: home
---

Explain binary tree post order depth first traversal.

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

  static *BinaryTreePODT(node, stack = []) {
    let last = null;
    while(node || stack.length) {
      if(node) {
        stack.push(node);
        node = node.left;
      }
      else {
        const peek = stack[stack.length-1];
        if(peek.right && peek.right !== last)
          node = peek.right;
        else {
          last = stack.pop();
          yield last;
          node = null;
        }
      }
    }
  }

})();
{% endhighlight %}
