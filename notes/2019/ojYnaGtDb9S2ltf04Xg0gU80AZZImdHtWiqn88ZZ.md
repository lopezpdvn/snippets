---
layout: page
title: Note
permalink: /note/
---

Explain

{% highlight csharp %}
var input = "201";
// bool TryParse (string s, out int result)
if(int.TryParse(input, out var result))
  result.Dump();
else
  "Unable to parse".Dump();
{% endhighlight %}

Output

```
201
```
