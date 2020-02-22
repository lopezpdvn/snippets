---
layout: page
title: Note
permalink: /note/
---

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const x = [1, 2];
log(x.pop());
log(x.pop());
log(x.pop());
log(x.pop());

})();
{% endhighlight %}

Output

```
2
1
undefined
undefined
```
