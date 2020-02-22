---
layout: page
title: Note
permalink: /note/
---

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

f();

let f = function() {
  log('f');
}

})();
{% endhighlight %}

Output

```
ReferenceError: f is not defined
```
