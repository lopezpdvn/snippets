---
layout: page
title: home
---

Explain graph breadth first traversal.

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

  static *BFT(node, queue = []) {
    if(!node || node.state === State.visited)
      return;
    yield node;
    node.state = State.visited;
    queue.unshift(node);
    while(queue.length) {
      node = queue.pop();
      for(const i of node) {
        if(i.state === State.visited)
          continue;
        yield i;
        i.state = State.visited;
        queue.unshift(i);
      }
    }
  }

})();
{% endhighlight %}
