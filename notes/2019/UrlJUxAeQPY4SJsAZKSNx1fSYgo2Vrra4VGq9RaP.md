---
layout: page
title: home
---

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const factorial = function f(n) {
  if(n < 0)
    return -1;
  return n < 2 ? 1 : n * f(n-1)
}

})();
{% endhighlight %}
