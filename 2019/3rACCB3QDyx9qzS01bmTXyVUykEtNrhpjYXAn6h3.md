---
layout: page
title: Note
permalink: /note/
---

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const x = new Array(3);
log(x.length);

for(const [i, e] of x.entries())
  log(`${e    === undefined &&
         x[i] === undefined}`);

})();
{% endhighlight %}

Output

```
3
true
true
true
```
