---
layout: default
title: home
permalink: /
---

Explain graph depth first traversal recursive.

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

class Graph {
  static *DepthFirstTraversal(node) {
    if(!node || node.state === State.Visited)
      return;
    yield* Graph._DepthFirstTraversal(node);
  }
}

Graph._DepthFirstTraversal = function* f(node) {
  yield node;
  node.state = State.Visited;
  for(const child of node) {
    if(child.state === State.Visited)
      continue;
    yield* f(child);
  }
}

})();
{% endhighlight %}
