---
layout: page
title: home
---

From the naive implementation of `int fibonacci(int n)`, below improvement is
called _bottom-up dynamic programming_, its time complexity is O(n) and its
space complexity is O(1).

{% highlight java %}
int fibonacci(int n) {
  if (n == 0) return 0;
  int a = 0;
  int b = 1;
  for (int i = 2; i < n; i++) {
    int c = a + b;
    a = b;
    b = c;
  }
  return a + b;
}
{% endhighlight %}
