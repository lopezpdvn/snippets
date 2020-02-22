---
layout: page
title: home
---

The top three grades usin 3 different LINQ extension methods.

{% highlight csharp %}
int[] grades = { 59, 82, 70, 56, 92, 98, 85 };

var top3Grades0 =
    grades.OrderByDescending(grade => grade)
          .Take(3);

foreach (int grade in top3Grades0)
  grade.Dump();

string.Empty.Dump();

var top3Grades1 =
    grades.OrderByDescending(grade => grade)
          .TakeWhile((e, i) => i < 3);

foreach (int grade in top3Grades1)
  grade.Dump();
{% endhighlight %}

Output

```
98
92
85

98
92
85
```
