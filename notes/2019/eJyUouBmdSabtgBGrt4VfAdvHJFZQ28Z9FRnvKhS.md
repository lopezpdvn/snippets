---
layout: page
title: Note
permalink: /note/
---

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

const display = x => log(x.toString(2)
                          .padStart(4, '0'));
const x = 0b1101;
display(x);
display(x >> 2);
display(x >>> 2);

})();
{% endhighlight %}

Output

```
1101
0011
0011
```
