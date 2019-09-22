---
layout: page
title: Note
permalink: /note/
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

const f =
  (msg: string) : never =>
    { throw new Error(msg); }

f('hey');

})();
{% endhighlight %}

Output

```
(node:3940) UnhandledPromiseRejectionWarning: Error: hey
```
