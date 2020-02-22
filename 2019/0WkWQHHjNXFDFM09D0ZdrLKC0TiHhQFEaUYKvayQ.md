---
layout: page
title: home
---

Addition with fold.

{% highlight csharp %}
var x = Enumerable.Range(1, 4);
int i = 0, j = 0;

x.Aggregate((a, e) => {i++ ; return a + e;})
 .Dump();
i.Dump();

x.Aggregate(0,
            (a, e) => { j++; return a + e;})
 .Dump();
j.Dump();
{% endhighlight %}

Output

```
10
3
10
4
```
