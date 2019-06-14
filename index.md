---
layout: page
title: home
---

{% highlight csharp %}
string[]
  vegetables = { "Tomato", "Cucumber", "Carrot" },
  fruits = { "Apples", "Grapes", "Banana" };

var result = vegetables.Concat(fruits);

foreach (var piece in result)
  piece.Dump();
{% endhighlight %}

Output

```
Tomato
Cucumber
Carrot
Apples
Grapes
Banana
```
