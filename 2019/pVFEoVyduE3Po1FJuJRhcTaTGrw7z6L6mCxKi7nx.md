---
layout: page
title: home
---

Arithmetic mean

{% highlight csharp %}
int[] numbers = { 10, 10, 11, 11 };
var result = numbers.Average();
result.GetType().FullName.Dump();
result.Dump();
{% endhighlight %}

Output

```
System.Double
10.5
```
