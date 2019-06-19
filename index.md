---
layout: page
title: home
---

{% highlight csharp %}
var nums = Enumerable.Range(1, 10);
var q =
  from x in nums.Select((e, i) => new { e, i })
  where (x.e % 3 == 0 && x.i >= 5)
  select x.e;

foreach (int number in q)
  q.Dump();
{% endhighlight %}

Numbers divisible by 3 and indexed >= 5:

```
6
9
```
