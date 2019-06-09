---
layout: page
title: home
---

{% highlight csharp %}
int[] A = {1, 2, 3}, B = {3, 4, 5};

// C = A ∪ B
var C = A.Union(B);

foreach(var i in C) i.Dump();
{% endhighlight %}

Output

```
1
2
3
4
5
```
