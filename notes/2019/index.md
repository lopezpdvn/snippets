---
layout: page
title: home
---

Simple use of numeric enums.

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

enum Response {
  No = 0,
  Yes = 1,
}

const respond =
  (recipient: string, msg: Response): void =>
    log(`We say ${msg} to ${recipient}`);

respond("Princess Caroline", Response.Yes)

})();
{% endhighlight %}

Output

```
We say 1 to Princess Caroline
```
