---
layout: page
title: Note
permalink: /note/
---

Binary number literals and parsing strings as binary numbers.

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

log(parseInt('1101', 2) === 0b1101);

})();
{% endhighlight %}

Output

```
true
```
