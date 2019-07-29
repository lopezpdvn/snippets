---
layout: page
title: home
---

Using `function` keyword, define an add4 function.

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

function add4(x: number) : number {
  return x + 4;
}

log(`${add4(5)}`);

})();
{% endhighlight %}

Output

```
9
```
