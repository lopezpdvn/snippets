---
layout: page
title: home
---

Explain binary tree Pre Order depth first traversal/search algorithm, iterative
form 

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

class BinaryTree {

  static *PreODT(node, stack = []) {
    if(!node)
      return;
    stack.push(node);
    while(stack.length) {
      node = stack.pop();
      yield node;
      for(const i of node)
        stack.push(i);
    }
  }

}

})();
{% endhighlight %}
