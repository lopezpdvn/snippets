---
layout: page
title: home
---

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const resolved = () => console.log('Resolved');
const rejected = log;

Promise.resolve(new Error('fail'))
       .then(resolved, rejected);

})();
{% endhighlight %}

Output

```
Error: fail
```
