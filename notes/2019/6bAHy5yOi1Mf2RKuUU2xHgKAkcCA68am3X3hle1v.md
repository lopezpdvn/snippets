---
layout: page
title: home
---

Numbers divisible by 3 and indexed >= 5.

{% highlight csharp %}
int[] x = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Query syntax
var result0 =
  from n in x.Select((e, i) => (e, i))
  where (n.e % 3 == 0 && n.i >= 5)
  select n.e;

foreach (var number in result0)
  number.Dump();

string.Empty.Dump();

// Method syntax
var result1 =
  x.Where((e, i) => e % 3 == 0 && i >= 5);

foreach (var number in result0)
  number.Dump();
{% endhighlight %}

Output

```
6
9

6
9
```
