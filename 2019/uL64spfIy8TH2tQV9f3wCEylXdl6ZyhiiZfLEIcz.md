---
layout: page
title: home
---

Define a generic identity function as a call signature of an object literal
type

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

const identity: {<T>(arg: T): T} = arg => arg;

log(identity('abc'));
log(identity(4));

})();
{% endhighlight %}

Output

```
abc
4
```
