---
layout: page
title: home
---

{% highlight csharp %}
var amounts = new[] { 5000, 2500, 9000, 8000,
  6500, 4000, 1500, 5500 };

var q = amounts.SkipWhile(
  (amount, index) => amount > index * 1000);

foreach (var amount in q) amount.Dump();
{% endhighlight %}

Start iteration until `index * 1000` is greater or equal than the element.


```
4000
1500
5500
```
