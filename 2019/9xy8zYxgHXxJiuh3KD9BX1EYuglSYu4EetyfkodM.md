---
layout: page
title: home
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

const buildName =
  (name1st: string, nameLast?: string) =>
    `${name1st}${nameLast ? ` ${nameLast}` : ""}`

log(buildName("Bob"));
log(buildName("Bob", "Adams", "Sr."));
log(buildName("Bob", "Adams"));

})();
{% endhighlight %}

Output

```
Bob
<compilation error>
Bob Adams
```
