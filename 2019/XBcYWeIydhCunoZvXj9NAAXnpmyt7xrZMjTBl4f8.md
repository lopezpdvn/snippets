---
layout: page
title: home
---

{% highlight csharp %}
var numbers = new List<int> { 1, 2 };
bool isEmpty = numbers.Any();
var _isEmpty = isEmpty ? "not " : string.Empty;
$"The list is {_isEmpty}empty.".Dump();
{% endhighlight %}

Output

```
The list is not empty.
```
