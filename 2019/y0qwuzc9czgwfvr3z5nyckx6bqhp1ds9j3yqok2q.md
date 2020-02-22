---
layout: page
title: Note
permalink: /note/
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

const f =
  ([first, second, third]:
     [string, number, any]) => {
    
  log(first.length);
  log(second);
  log(third);
}

f(['abc', 5, 4]);

})();
{% endhighlight %}

Output

```
3
5
4
```
