---
layout: page
title: home
---

Define a typed identity arrow function.

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

const identity = <T>(arg: T) : T => arg;

log(identity('abc'));
log(identity(4));

})();
{% endhighlight %}

Output

```
abc
4
```
