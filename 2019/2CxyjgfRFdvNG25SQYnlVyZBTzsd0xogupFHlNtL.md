---
layout: page
title: home
---

{% highlight csharp %}
var y = Enumerable.Range(4, 5);
foreach(var x in y)
  x.Dump();
{% endhighlight %}

Output

```
4
5
6
7
8
```
