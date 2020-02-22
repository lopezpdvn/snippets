---
layout: page
title: home
---

Does any of the names start with the letter 'B'?

{% highlight csharp %}
string[] names = { "Bob", "Ned", "Amy", "Bill" };
var result = names.Any(n => n.StartsWith("B"));
result.Dump();
{% endhighlight %}

Output

```
True
```
