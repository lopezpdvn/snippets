---
layout: page
title: Note
permalink: /note/
---

Explain the non-recursive portion of quick sort.

{% highlight java %}
public static int partition(
                int[] arr, int left, int right) {
  int pivot = arr[left + (right - left) / 2];
  
  while (left <= right) {
    // Find element on L that should be on R
    while (arr[left] < pivot) left++;
    
    // Find element on R that should be on L
    while (arr[right] > pivot) right--;
    
    // Swap elements, and move L & F indices
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left; 
}
{% endhighlight %}
