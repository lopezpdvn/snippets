---
layout: page
title: home
---

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const gen = function* () {};
Promise.all(gen())
       .then(log);

})();
{% endhighlight %}

Output

```
[]
```
