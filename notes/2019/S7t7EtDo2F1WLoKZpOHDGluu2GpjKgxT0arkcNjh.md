---
layout: page
title: home
---

SQL basic join of tables Courses and Teachers with implicit join

{% highlight sql %}
SELECT c.Name 'Course', t.Name 'Teacher'
FROM Courses c, Teachers t
WHERE c.id = t.id
ORDER BY 1
{% endhighlight %}
