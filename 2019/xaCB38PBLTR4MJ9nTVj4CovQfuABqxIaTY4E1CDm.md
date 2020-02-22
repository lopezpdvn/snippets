---
layout: page
title: home
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>
  (arg: T): T {
  log(arg.length);
  return arg;
}

loggingIdentity(3);
loggingIdentity({length: 10, value: 3});
loggingIdentity([]);

})();
{% endhighlight %}

Output

```
<compilation error>
10
0
```
