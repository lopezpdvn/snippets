---
layout: page
title: home
---

{% highlight csharp %}
var A = new HashSet<int>{ 1, 2, 3, 4 };
var B = new HashSet<int>{ 1, 3 };

// C = A \ B
IEnumerable<int> C = A.Except(B);

foreach (var i in C.OrderBy(c => c))
  i.Dump();
{% endhighlight %}

Output

```
2
4
```
