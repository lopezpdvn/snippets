---
layout: page
title: home
---

All grades except the top three using 3 different LINQ extension methods.

{% highlight csharp %}
int[] grades = { 59, 82, 70, 56, 92, 98, 85 };

var lowerGrades0 =
  grades.OrderByDescending(g => g)
        .Skip(3);

foreach (int grade in lowerGrades0)
  grade.Dump();

string.Empty.Dump();

var lowerGrades1 =
  grades.OrderByDescending(g => g)
        .SkipWhile((e, i) => i < 3);

foreach (int grade in lowerGrades1)
  grade.Dump();
{% endhighlight %}

Output

```
82
70
59
56

82
70
59
56
```
