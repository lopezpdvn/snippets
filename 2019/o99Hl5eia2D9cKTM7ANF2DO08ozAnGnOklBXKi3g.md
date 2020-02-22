---
layout: page
title: Note
permalink: /note/
---

Explain graph depth first traversal algorithm in iterative form

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

class Graph {
  static *DFT(node, stack = []) {
    if(!node)
      return;
    stack.push(node);

    while(stack.length) {
      node = stack.pop();
      if(node.state === State.Visited)
        continue;
      yield node;
      node.state = State.Visited;
      for(const i of node) //or node.adjcntRevrs()
        stack.push(i);
    }
  }
}

})();
{% endhighlight %}
