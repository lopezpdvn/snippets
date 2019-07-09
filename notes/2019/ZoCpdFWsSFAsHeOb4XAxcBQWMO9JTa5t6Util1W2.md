---
layout: page
title: home
---

{% highlight csharp %}
string[] names = { "Hartono, Tommy",
  "Adams, Terry", "Andersen, Henriette Thaulow",
  "Hedlund, Magnus", "Ito, Shu" };
var randInt =
  new Random(DateTime.Now.Millisecond)
  .Next(0, names.Length);

string name = names.ElementAt(randInt);

$"The name chosen at random is '{name}'".Dump();
{% endhighlight %}

Output

```
The name chosen at random is 'Hedlund, Magnus'
```
