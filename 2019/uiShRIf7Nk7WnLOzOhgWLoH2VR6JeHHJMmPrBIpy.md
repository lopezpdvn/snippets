---
layout: page
title: Note
permalink: /note/
---

Explain the recursive portion of quick sort.

{% highlight java %}
public static void quickSort(
                 int[] arr, int left, int right) {
  int index = partition(arr, left, right); 
  if (left < index - 1) // Sort left half
    quickSort(arr, left, index - 1);
  if (index < right)    // Sort right half
    quickSort(arr, index, right);
}
{% endhighlight %}
