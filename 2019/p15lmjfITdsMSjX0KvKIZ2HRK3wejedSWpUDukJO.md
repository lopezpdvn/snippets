---
layout: page
title: home
---

{% highlight csharp %}
string[] names = { "Hartono, Tommy",
  "Adams, Terry", "Andersen, Henriette Thaulow",
  "Hedlund, Magnus", "Ito, Shu" };

var index = 20;

string name = names.ElementAtOrDefault(index);

var nameDisplay =
  name ?? "<no name at this index>";

($"Name chosen at index {index} is " +
 $"'{nameDisplay}'.").Dump();
{% endhighlight %}

Output

```
Name chosen at index 20 is '<no name at this index>'.
```
